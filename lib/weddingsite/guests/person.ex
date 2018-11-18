defmodule Weddingsite.Guests.Person do
  use Ecto.Schema
  import Ecto.Changeset
  alias Weddingsite.Guests


  schema "people" do
    field :attending, :boolean, default: false
    field :day_guest, :boolean, default: false
    field :dessert_choice, Weddingsite.Guests.DessertChoiceEnum
    field :dietary_requirements, :string
    field :email, :string
    field :first_name, :string
    field :last_name, :string
    field :rsvp_at, :naive_datetime
    belongs_to :invite, Guests.Invite

    timestamps()
  end

  @doc false
  def changeset(person, attrs) do
    fields =  [:first_name, :last_name, :email, :day_guest, :attending,
                :dessert_choice, :dietary_requirements]
    req_fields = [:first_name, :last_name, :email, :day_guest]

    person
    |> cast(attrs, fields)
    |> validate_required(req_fields)
  end
end
