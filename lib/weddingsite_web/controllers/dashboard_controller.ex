defmodule WeddingsiteWeb.DashboardController do
  use WeddingsiteWeb, :controller

  alias Weddingsite.Guests
  alias Weddingsite.Guests.Person

  def get_new_code(conn, _params) do
    new_code = ThreeWords.generate()
    render(conn, "code.json", code: new_code)
  end

  def index(conn, _params) do
    {invites, people} = {Guests.list_invites(), Guests.list_people()}

    render(conn, "index.html", %{data: build_payload(invites, people)})
  end

  defp build_payload(invites, people) do
    rsvpd_people = only_rsvp(people)
    attendees = only_attendees(rsvpd_people)
    day_guests = only_day_guests(attendees)
    rsvpd_no = only_rsvpd_no(rsvpd_people)
    {cheesecakes, tarts} = {cheesecakes_only(attendees), tarts_only(attendees)}
    dietary_requirements = only_with_dietary_requirements(rsvpd_people)

    %{num_invites: Enum.count(invites), num_people: Enum.count(people), num_rsvps: Enum.count(rsvpd_people),
      num_day_guests: Enum.count(day_guests), num_rsvpd_no: Enum.count(rsvpd_no), num_total_guests: Enum.count(attendees),
      num_cheesecakes: Enum.count(cheesecakes), num_tarts: Enum.count(tarts),
      num_dietary_requirements: Enum.count(dietary_requirements)}
  end

  defp only_attendees(people) do
    Enum.filter(people, fn %Person{attending: x} -> x == true end )
  end

  defp only_rsvpd_no(people) do
    Enum.filter(people, fn %Person{attending: x} -> x == false end )
  end

  defp only_day_guests(attendees) do
    Enum.filter(attendees, fn %Person{day_guest: x} -> x == true end )
  end

  defp only_rsvp(people) do
    Enum.filter(people, fn p -> has_rsvpd?(p) end)
  end

  defp has_rsvpd?(%Person{rsvp_at: rsvp_at}), do: rsvp_at != nil

  defp cheesecakes_only(people) do
    Enum.filter(people, fn %Person{dessert_choice: dessert} -> dessert == :raspberry_cheesecake end)
  end

  defp tarts_only(people) do
    Enum.filter(people, fn %Person{dessert_choice: dessert} -> dessert == :chocolate_tart end)
  end

  defp only_with_dietary_requirements(people) do
    Enum.filter(people, fn %Person{dietary_requirements: reqs} -> reqs != nil end)
  end


end