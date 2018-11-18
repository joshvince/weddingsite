defmodule WeddingsiteWeb.PersonControllerTest do
  use WeddingsiteWeb.ConnCase

  alias Weddingsite.Guests

  @create_attrs %{attending: true, day_guest: true, dessert_choice: :raspberry_cheesecake, dietary_requirements: "some dietary_requirements", email: "some email", first_name: "some first_name", last_name: "some last_name", rsvp_at: ~D[2010-04-17]}
  @update_attrs %{attending: false, day_guest: false, dessert_choice: :chocolate_tart, dietary_requirements: "some updated dietary_requirements", email: "some updated email", first_name: "some updated first_name", last_name: "some updated last_name", rsvp_at: ~D[2011-05-18]}
  @invalid_attrs %{attending: nil, day_guest: nil, dessert_choice: "DROPDB", dietary_requirements: nil, email: nil, first_name: nil, last_name: nil, rsvp_at: nil}

  def fixture(:person) do
    {:ok, person} = Guests.create_person(@create_attrs)
    person
  end

  describe "index" do
    test "lists all people", %{conn: conn} do
      conn = get(conn, Routes.person_path(conn, :index))
      assert html_response(conn, 200) =~ "Listing People"
    end
  end

  describe "new person" do
    test "renders form", %{conn: conn} do
      conn = get(conn, Routes.person_path(conn, :new))
      assert html_response(conn, 200) =~ "New Person"
    end
  end

  describe "create person" do
    test "redirects to show when data is valid", %{conn: conn} do
      conn = post(conn, Routes.person_path(conn, :create), person: @create_attrs)

      assert %{id: id} = redirected_params(conn)
      assert redirected_to(conn) == Routes.person_path(conn, :show, id)

      conn = get(conn, Routes.person_path(conn, :show, id))
      assert html_response(conn, 200) =~ "Show Person"
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.person_path(conn, :create), person: @invalid_attrs)
      assert html_response(conn, 200) =~ "New Person"
    end
  end

  describe "edit person" do
    setup [:create_person]

    test "renders form for editing chosen person", %{conn: conn, person: person} do
      conn = get(conn, Routes.person_path(conn, :edit, person))
      assert html_response(conn, 200) =~ "Edit Person"
    end
  end

  describe "update person" do
    setup [:create_person]

    test "redirects when data is valid", %{conn: conn, person: person} do
      conn = put(conn, Routes.person_path(conn, :update, person), person: @update_attrs)
      assert redirected_to(conn) == Routes.person_path(conn, :show, person)

      conn = get(conn, Routes.person_path(conn, :show, person))
      assert html_response(conn, 200) =~ "some updated dietary_requirements"
    end

    test "renders errors when data is invalid", %{conn: conn, person: person} do
      conn = put(conn, Routes.person_path(conn, :update, person), person: @invalid_attrs)
      assert html_response(conn, 200) =~ "Edit Person"
    end
  end

  describe "delete person" do
    setup [:create_person]

    test "deletes chosen person", %{conn: conn, person: person} do
      conn = delete(conn, Routes.person_path(conn, :delete, person))
      assert redirected_to(conn) == Routes.person_path(conn, :index)
      assert_error_sent 404, fn ->
        get(conn, Routes.person_path(conn, :show, person))
      end
    end
  end

  defp create_person(_) do
    person = fixture(:person)
    {:ok, person: person}
  end
end
