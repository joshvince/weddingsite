defmodule Weddingsite.Guests.Invite do
  use Ecto.Schema
  import Ecto.Changeset
  alias Weddingsite.Guests


  schema "invites" do
    field :code, :string
    field :day_guests, :boolean, default: false
    field :email, :string
    field :family_name, :string
    has_many :people, Guests.Person

    timestamps()
  end

  @doc false
  def changeset(invite, attrs) do
    invite
    |> cast(attrs, [:code, :family_name, :email, :day_guests])
    |> validate_required([:code, :family_name, :email, :day_guests])
  end

  @doc false
  def guest_list_changeset(invite, guest_list) do
    invite
    |> cast(%{}, [])
    |> put_assoc(:people, guest_list)
  end
end
