defmodule WeddingsiteWeb.RSVPController do
  use WeddingsiteWeb, :controller

  alias Weddingsite.Guests

  def show_json(conn, %{"code" => code}) do
    invite = Guests.get_invite_by_code(code)
    render(conn, "rsvp.json", invite: invite)
  end

  def rsvp_reply(conn, %{"code" => code, "rsvps" => rsvps} = data) do
    IO.inspect data
    #  NOW WE NEED TO UPDATE THE INVITE WITH THIS RSVP DATA
    invite = Guests.rsvp_reply(code, rsvps)

    render(conn, "rsvp.json", invite: invite)
  end

end