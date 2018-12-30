defmodule WeddingsiteWeb.InviteController do
  use WeddingsiteWeb, :controller

  alias Weddingsite.Guests
  alias Weddingsite.Guests.Invite

  def index(conn, _params) do
    invites = Guests.list_invites()
    render(conn, "index.html", invites: invites)
  end

  def new(conn, _params) do
    code = Weddingsite.ThreeWords.generate()
    changeset = Guests.change_invite(%Invite{code: code})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"invite" => invite_params}) do
    case Guests.create_invite(invite_params) do
      {:ok, invite} ->
        conn
        |> put_flash(:info, "Invite created successfully.")
        |> redirect(to: Routes.invite_path(conn, :show, invite))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    invite = Guests.get_invite!(id)
    render(conn, "show.html", invite: invite)
  end

  def edit(conn, %{"id" => id}) do
    invite = Guests.get_invite!(id)
    changeset = Guests.change_invite(invite)
    render(conn, "edit.html", invite: invite, changeset: changeset)
  end

  def update(conn, %{"id" => id, "invite" => invite_params}) do
    invite = Guests.get_invite!(id)

    case Guests.update_invite(invite, invite_params) do
      {:ok, invite} ->
        conn
        |> put_flash(:info, "Invite updated successfully.")
        |> redirect(to: Routes.invite_path(conn, :show, invite))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", invite: invite, changeset: changeset)
    end
  end

  def guests(conn, %{"id" => id}) do
    invite = Guests.get_invite!(id)
    uninvited_people = Guests.list_uninvited_people()
    render(conn, "guest_list.html", invite: invite, uninvited_people: uninvited_people)
  end

  def update_guests(conn, %{"id" => id} = params) do
    invite = Guests.get_invite!(id)
    if Map.has_key?(params, "guest_list") do
      new_guests = merge_guest_lists(params["guest_list"], invite.people)
      case Guests.add_guests(invite, new_guests) do
        %Guests.Invite{} = invite ->
          conn
          |> put_flash(:info, "Guest list updated successfully.")
          |> redirect(to: Routes.invite_path(conn, :show, invite))
        _error->
          conn
          |> put_flash(:error, "Guest list could not be updated... sorry about that.")
          |> redirect(to: Routes.invite_path(conn, :show, invite))
      end
    else
      conn
      |> put_flash(:info, "You didn't select anything to update")
      |> redirect(to: Routes.invite_path(conn, :show, invite))
    end
  end

  defp merge_guest_lists(new_guest_ids, existing_guests) do
    old_guests = Enum.map(existing_guests, &(&1.id))
    new_guests = Enum.map(new_guest_ids, &String.to_integer(&1))
    old_guests ++ new_guests
  end

  def delete(conn, %{"id" => id}) do
    invite = Guests.get_invite!(id)
    {:ok, _invite} = Guests.delete_invite(invite)

    conn
    |> put_flash(:info, "Invite deleted successfully.")
    |> redirect(to: Routes.invite_path(conn, :index))
  end
end
