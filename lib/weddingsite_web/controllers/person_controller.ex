defmodule WeddingsiteWeb.PersonController do
  use WeddingsiteWeb, :controller

  alias Weddingsite.Guests
  alias Weddingsite.Guests.Person

  def index(conn, _params) do
    people = Guests.list_people()
    render(conn, "index.html", people: people)
  end

  def attending_people(conn, _params) do
    people =
      Guests.list_people()
      |> Enum.filter(&is_attending?(&1))
    render(conn, "index.html", people: people)
  end

  def attending_day_guests(conn, _params) do
    people =
      Guests.list_people()
      |> Enum.filter(&is_attending?(&1))
      |> Enum.filter(&is_day_guest?(&1))
    render(conn, "index.html", people: people)
  end

  def attending_evening_guests(conn, _params) do
    people =
      Guests.list_people()
      |> Enum.filter(&is_attending?(&1))
      |> Enum.reject(&is_day_guest?(&1))
    render(conn, "index.html", people: people)
  end

  def responded_people(conn, _params) do
    people =
      Guests.list_people()
      |> Enum.filter(&has_rsvpd?(&1))
    render(conn, "index.html", people: people)
  end

  def not_yet_responded_people(conn, _params) do
    people =
      Guests.list_people()
      |> Enum.reject(&has_rsvpd?(&1))
    render(conn, "index.html", people: people)
  end

  def cant_attend_people(conn, _params) do
    people =
      Guests.list_people()
      |> Enum.filter(&has_rsvpd?(&1))
      |> Enum.reject(&is_attending?(&1))
    render(conn, "index.html", people: people)
  end

  def cheesecakes(conn, _params) do
    people =
      Guests.list_people()
      |> Enum.filter(&is_attending?(&1))
      |> Enum.filter(fn %Person{dessert_choice: dessert} -> dessert == :raspberry_cheesecake end)
    render(conn, "index.html", people: people)
  end

  def tarts(conn, _params) do
    people =
      Guests.list_people()
      |> Enum.filter(&is_attending?(&1))
      |> Enum.filter(fn %Person{dessert_choice: dessert} -> dessert == :chocolate_tart end)
    render(conn, "index.html", people: people)
  end

  def with_dietary_requirements(conn, _params) do
    people =
    Guests.list_people()
    |> Enum.filter(&is_attending?(&1))
    |> Enum.filter(fn %Person{dietary_requirements: reqs} -> reqs != nil end)
    render(conn, "index.html", people: people)
  end

  defp has_rsvpd?(%Person{rsvp_at: rsvp}) do
    rsvp != nil
  end

  defp is_attending?(%Person{attending: attending}) do
    attending == true
  end

  defp is_day_guest?(%Person{day_guest: day}) do
    day == true
  end

  def new(conn, _params) do
    changeset = Guests.change_person(%Person{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"person" => person_params}) do
    case Guests.create_person(person_params) do
      {:ok, person} ->
        conn
        |> put_flash(:info, "Person created successfully.")
        |> redirect(to: Routes.person_path(conn, :show, person))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    person = Guests.get_person!(id)
    render(conn, "show.html", person: person)
  end

  def edit(conn, %{"id" => id}) do
    person = Guests.get_person!(id)
    changeset = Guests.change_person(person)
    render(conn, "edit.html", person: person, changeset: changeset)
  end

  def update(conn, %{"id" => id, "person" => person_params}) do
    person = Guests.get_person!(id)

    case Guests.update_person(person, person_params) do
      {:ok, person} ->
        conn
        |> put_flash(:info, "Person updated successfully.")
        |> redirect(to: Routes.person_path(conn, :show, person))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", person: person, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    person = Guests.get_person!(id)
    {:ok, _person} = Guests.delete_person(person)

    conn
    |> put_flash(:info, "Person deleted successfully.")
    |> redirect(to: Routes.person_path(conn, :index))
  end
end
