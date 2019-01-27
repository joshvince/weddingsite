defmodule WeddingsiteWeb.RSVPController do
  use WeddingsiteWeb, :controller

  alias Weddingsite.Guests

  def show_json(conn, %{"code" => code}) do
    invite = Guests.get_invite_by_code(code)
    render(conn, "rsvp.json", invite: invite)
  end

  def rsvp_reply(conn, %{"code" => code, "rsvps" => rsvps} = data) do
    IO.inspect("code was #{code}")
    Enum.each(rsvps, fn r -> IO.inspect(r) end)

    invite = Guests.rsvp_reply(code, rsvps)
    Enum.each(invite.people, fn p -> IO.inspect("invite attendee: #{p.id}") end)
    render(conn, "rsvp.json", invite: invite)
  end

  def check_code(conn, %{"code" => code}) do
    if Guests.check_rsvp_code(code) do
      conn
      |> put_status(200)
      |> render("codecheck.json", %{resp: "Code was correct"})
    else
      conn
      |> put_status(404)
      |> render("codecheck.json", %{resp: "Keep trying"})
    end
  end

end