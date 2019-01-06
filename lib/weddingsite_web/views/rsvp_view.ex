defmodule WeddingsiteWeb.RSVPView do
  use WeddingsiteWeb, :view

  def render("rsvp.json", %{invite: invite}) do
    guest_list = render_guests(invite.people)
    %{family_name: invite.family_name, guests: guest_list, code: invite.code, day_guests: invite.day_guests}
  end

  defp render_guests(people_list) do
    Enum.map(people_list, &render_one_guest(&1))
  end

  defp render_one_guest(person) do
    %{first_name: person.first_name, last_name: person.last_name, id: person.id}
  end
end