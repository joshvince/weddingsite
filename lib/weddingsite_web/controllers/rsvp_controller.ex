defmodule WeddingsiteWeb.RSVPController do
  use WeddingsiteWeb, :controller

  alias Weddingsite.Guests

  def show_json(conn, %{"code" => code}) do
    invite = Guests.get_invite_by_code(code)
    render(conn, "rsvp.json", invite: invite)
  end

end