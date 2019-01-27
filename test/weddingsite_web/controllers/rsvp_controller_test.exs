defmodule WeddingsiteWeb.RsvpControllerTest do
  use WeddingsiteWeb.ConnCase

  alias Weddingsite.Guests

  @create_invite_attrs %{code: "some code", day_guests: true, email: "some email", family_name: "some family_name"}
  @create_person_attrs %{attending: false, day_guest: true, dessert_choice: nil, dietary_requirements: nil, email: "some email", first_name: "some first_name", last_name: "some last_name"}
  @rsvp_reply %{attending: true, dessert_choice: "raspberry_cheesecake", dietary_requirements: "some", rsvp_at: "2018-12-01T01:12:28"}

  def invite_fixture(attrs \\ %{}) do
    {:ok, invite} =
      attrs
      |> Enum.into(@create_invite_attrs)
      |> Guests.create_invite()

    invite
  end

  def person_fixture(attrs \\ %{}) do
    {:ok, person} =
      attrs
      |> Enum.into(@create_person_attrs)
      |> Guests.create_person()

    person
  end

  def invite_person_fixture(attrs \\ %{}) do
    invite = invite_fixture()
    [%{id: id_1}, %{id: id_2}] = [person_fixture(), person_fixture()]
    invite_with_guests = Guests.add_guests(invite, [id_1, id_2])
  end

  def merge_ids_into_rsvp_attrs(invite) do
    guest_ids = Enum.map(invite.people, fn p -> p.id end)
    guest_ids
    |> Enum.map(fn id -> %{id: id} end)
    |> Enum.map(fn id_map -> Map.merge(id_map, @rsvp_reply) end)
  end

  describe "rsvp_reply" do
    test "Updates the RSVP for multiple people" do
      invite = invite_person_fixture()
      rsvp_data = merge_ids_into_rsvp_attrs(invite)
      post(build_conn(), "/api/rsvp/#{invite.code}", %{rsvps: rsvp_data})

      attendance = Guests.get_invite_by_code(invite.code).people
      assert Enum.all?(attendance, fn %{attending: a} -> a == true end)

    end
  end

  describe "check code" do
    test "Returns a 200 when the code exists" do
      invite = invite_person_fixture()
      conn = get(build_conn(), Routes.rsvp_path(build_conn(), :check_code, %{"code" => invite.code}))
      assert json_response(conn, 200)
    end

    test "Returns 404 when the code does not exist" do
      conn = get(build_conn(), Routes.rsvp_path(build_conn(), :check_code, %{"code" => "foo"}))
      assert json_response(conn, 404)
    end
  end



end