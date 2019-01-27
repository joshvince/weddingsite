defmodule Weddingsite.Guests do
  @moduledoc """
  The Guests context.
  """

  import Ecto.Query, warn: false
  alias Weddingsite.Repo

  alias Weddingsite.Guests.Invite
  alias Weddingsite.Guests.Person

  @doc """
  Returns the list of invites.

  ## Examples

      iex> list_invites()
      [%Invite{}, ...]

  """
  def list_invites do
    Invite
    |> Repo.all()
    |> Repo.preload(:people)
  end

  @doc """
  Gets a single invite.

  Raises `Ecto.NoResultsError` if the Invite does not exist.

  ## Examples

      iex> get_invite!(123)
      %Invite{}

      iex> get_invite!(456)
      ** (Ecto.NoResultsError)

  """
  def get_invite!(id) do
    Invite
    |> Repo.get!(id)
    |> Repo.preload(:people)
  end

  @doc """
  Creates a invite.

  ## Examples

      iex> create_invite(%{field: value})
      {:ok, %Invite{}}

      iex> create_invite(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_invite(attrs \\ %{}) do
    %Invite{}
    |> Invite.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a invite.

  ## Examples

      iex> update_invite(invite, %{field: new_value})
      {:ok, %Invite{}}

      iex> update_invite(invite, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_invite(%Invite{} = invite, attrs) do
    invite
    |> Invite.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Adds people to an invite.
  This function should receive an invite and a list of IDs representing guest IDs.

  """

  def add_guests(%Invite{} = invite, guest_ids) do
    guest_list = Enum.map(guest_ids, &get_person!(&1))

    invite
    |> Repo.preload(:people)
    |> Invite.guest_list_changeset(guest_list)
    |> Repo.update!
  end

  @doc """
  Deletes a Invite.

  ## Examples

      iex> delete_invite(invite)
      {:ok, %Invite{}}

      iex> delete_invite(invite)
      {:error, %Ecto.Changeset{}}

  """
  def delete_invite(%Invite{} = invite) do
    Repo.delete(invite)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking invite changes.

  ## Examples

      iex> change_invite(invite)
      %Ecto.Changeset{source: %Invite{}}

  """
  def change_invite(%Invite{} = invite) do
    Invite.changeset(invite, %{})
  end

  @doc """
  Returns the list of people.

  ## Examples

      iex> list_people()
      [%Person{}, ...]

  """
  def list_people do
    Person
    |> Repo.all()
    |> Repo.preload(:invite)
  end

  @doc """
  Returns a list of people not currently added to an invite.

  ## Examples

      iex> list_people()
      [%Person{}, ...]

  """
  def list_uninvited_people do
    list_people()
    |> Enum.filter(fn p -> p.invite_id == nil end)
  end

  @doc """
  Gets a single person.

  Raises `Ecto.NoResultsError` if the Person does not exist.

  ## Examples

      iex> get_person!(123)
      %Person{}

      iex> get_person!(456)
      ** (Ecto.NoResultsError)

  """
  def get_person!(id) do
    Person
    |> Repo.get!(id)
    |> Repo.preload(:invite)
  end
  @doc """
  Creates a person.

  ## Examples

      iex> create_person(%{field: value})
      {:ok, %Person{}}

      iex> create_person(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_person(attrs \\ %{}) do
    %Person{}
    |> Person.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a person.

  ## Examples

      iex> update_person(person, %{field: new_value})
      {:ok, %Person{}}

      iex> update_person(person, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_person(%Person{} = person, attrs) do
    person
    |> Person.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Person.

  ## Examples

      iex> delete_person(person)
      {:ok, %Person{}}

      iex> delete_person(person)
      {:error, %Ecto.Changeset{}}

  """
  def delete_person(%Person{} = person) do
    Repo.delete(person)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking person changes.

  ## Examples

      iex> change_person(person)
      %Ecto.Changeset{source: %Person{}}

  """
  def change_person(%Person{} = person) do
    Person.changeset(person, %{})
  end

  ########
  # Public API functions

  # These functions serve the guest-facing static pages
  ########

  def get_invite_by_code(code) do
    Invite
    |> Repo.get_by!(code: code)
    |> Repo.preload(:people)
  end

  def rsvp_reply(code, rsvp_info) do
    rsvps = Enum.map(rsvp_info, &rsvp_one_person(&1))
    case all_rsvp_successfully?(rsvps) do
      false -> {:error, "Couldn't update the RSVP"}
      true -> {:ok, get_invite_by_code(code)}
    end
  end

  def check_rsvp_code(code) do
    case Repo.get_by(Invite, code: code) do
      nil -> false
      %Invite{} -> true
    end
  end

  defp rsvp_one_person(%{"id" => id} = rsvp_data) do
    attrs = parse_one_rsvp(rsvp_data)
    person = Repo.get!(Person, id)

    update_person(person, attrs)
  end

  defp parse_one_rsvp(%{"dessert_choice" => nil} = rsvp_data), do: rsvp_data

  defp parse_one_rsvp(%{"dessert_choice" => dessert_choice} = rsvp_data) when is_binary(dessert_choice) do
    %{rsvp_data | "dessert_choice" => String.to_atom(dessert_choice)}
  end

  defp all_rsvp_successfully?(rsvps) do
    rsvps
    |> Enum.map(fn {status, rsvp} -> status end)
    |> Enum.all?(fn status -> status == :ok end)
  end

end
