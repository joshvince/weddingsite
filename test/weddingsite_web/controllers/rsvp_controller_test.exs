defmodule WeddingsiteWeb.RsvpControllerTest do
  use WeddingsiteWeb.ConnCase

  alias Weddingsite.Guests

  @create_attrs %{code: "some code", day_guests: true, email: "some email", family_name: "some family_name"}

  def invite_fixture(attrs \\ %{}) do
    {:ok, invite} =
      attrs
      |> Enum.into(@create_attrs)
      |> Guests.create_invite()

    invite
  end

  describe "check code" do
    test "Returns a 200 when the code exists" do
      invite = invite_fixture(@create_attrs)
      conn = get(conn, Routes.rsvp_path(conn, :check_code, %{"code" => invite.code}))
      assert json_response(conn, 200)
    end

    test "Returns 404 when the code does not exist" do
      conn = get(conn, Routes.rsvp_path(conn, :check_code, %{"code" => "foo"}))
      assert json_response(conn, 404)
    end
  end



end