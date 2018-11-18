defmodule Weddingsite.GuestsTest do
  use Weddingsite.DataCase

  alias Weddingsite.Guests

  describe "invites" do
    alias Weddingsite.Guests.Invite

    @valid_attrs %{code: "some code", day_guests: true, email: "some email", family_name: "some family_name"}
    @update_attrs %{code: "some updated code", day_guests: false, email: "some updated email", family_name: "some updated family_name"}
    @invalid_attrs %{code: nil, day_guests: nil, email: nil, family_name: nil}

    def invite_fixture(attrs \\ %{}) do
      {:ok, invite} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Guests.create_invite()

      invite
    end

    test "list_invites/0 returns all invites" do
      invite = invite_fixture()
      assert Guests.list_invites() == [invite]
    end

    test "get_invite!/1 returns the invite with given id" do
      invite = invite_fixture()
      assert Guests.get_invite!(invite.id) == invite
    end

    test "create_invite/1 with valid data creates a invite" do
      assert {:ok, %Invite{} = invite} = Guests.create_invite(@valid_attrs)
      assert invite.code == "some code"
      assert invite.day_guests == true
      assert invite.email == "some email"
      assert invite.family_name == "some family_name"
    end

    test "create_invite/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Guests.create_invite(@invalid_attrs)
    end

    test "update_invite/2 with valid data updates the invite" do
      invite = invite_fixture()
      assert {:ok, %Invite{} = invite} = Guests.update_invite(invite, @update_attrs)
      assert invite.code == "some updated code"
      assert invite.day_guests == false
      assert invite.email == "some updated email"
      assert invite.family_name == "some updated family_name"
    end

    test "update_invite/2 with invalid data returns error changeset" do
      invite = invite_fixture()
      assert {:error, %Ecto.Changeset{}} = Guests.update_invite(invite, @invalid_attrs)
      assert invite == Guests.get_invite!(invite.id)
    end

    test "delete_invite/1 deletes the invite" do
      invite = invite_fixture()
      assert {:ok, %Invite{}} = Guests.delete_invite(invite)
      assert_raise Ecto.NoResultsError, fn -> Guests.get_invite!(invite.id) end
    end

    test "change_invite/1 returns a invite changeset" do
      invite = invite_fixture()
      assert %Ecto.Changeset{} = Guests.change_invite(invite)
    end
  end

  describe "people" do
    alias Weddingsite.Guests.Person

    @valid_attrs %{attending: true, day_guest: true, dessert_choice: "some dessert_choice", dietary_requirements: "some dietary_requirements", email: "some email", first_name: "some first_name", last_name: "some last_name", rsvp_at: ~D[2010-04-17]}
    @update_attrs %{attending: false, day_guest: false, dessert_choice: "some updated dessert_choice", dietary_requirements: "some updated dietary_requirements", email: "some updated email", first_name: "some updated first_name", last_name: "some updated last_name", rsvp_at: ~D[2011-05-18]}
    @invalid_attrs %{attending: nil, day_guest: nil, dessert_choice: nil, dietary_requirements: nil, email: nil, first_name: nil, last_name: nil, rsvp_at: nil}

    def person_fixture(attrs \\ %{}) do
      {:ok, person} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Guests.create_person()

      person
    end

    test "list_people/0 returns all people" do
      person = person_fixture()
      assert Guests.list_people() == [person]
    end

    test "get_person!/1 returns the person with given id" do
      person = person_fixture()
      assert Guests.get_person!(person.id) == person
    end

    test "create_person/1 with valid data creates a person" do
      assert {:ok, %Person{} = person} = Guests.create_person(@valid_attrs)
      assert person.attending == true
      assert person.day_guest == true
      assert person.dessert_choice == "some dessert_choice"
      assert person.dietary_requirements == "some dietary_requirements"
      assert person.email == "some email"
      assert person.first_name == "some first_name"
      assert person.last_name == "some last_name"
      assert person.rsvp_at == ~D[2010-04-17]
    end

    test "create_person/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Guests.create_person(@invalid_attrs)
    end

    test "update_person/2 with valid data updates the person" do
      person = person_fixture()
      assert {:ok, %Person{} = person} = Guests.update_person(person, @update_attrs)
      assert person.attending == false
      assert person.day_guest == false
      assert person.dessert_choice == "some updated dessert_choice"
      assert person.dietary_requirements == "some updated dietary_requirements"
      assert person.email == "some updated email"
      assert person.first_name == "some updated first_name"
      assert person.last_name == "some updated last_name"
      assert person.rsvp_at == ~D[2011-05-18]
    end

    test "update_person/2 with invalid data returns error changeset" do
      person = person_fixture()
      assert {:error, %Ecto.Changeset{}} = Guests.update_person(person, @invalid_attrs)
      assert person == Guests.get_person!(person.id)
    end

    test "delete_person/1 deletes the person" do
      person = person_fixture()
      assert {:ok, %Person{}} = Guests.delete_person(person)
      assert_raise Ecto.NoResultsError, fn -> Guests.get_person!(person.id) end
    end

    test "change_person/1 returns a person changeset" do
      person = person_fixture()
      assert %Ecto.Changeset{} = Guests.change_person(person)
    end
  end
end
