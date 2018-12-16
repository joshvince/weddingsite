defmodule Weddingsite.Repo.Migrations.CreatePeople do
  use Ecto.Migration

  def change do
    create table(:people) do
      add :first_name, :string
      add :last_name, :string
      add :email, :string
      add :day_guest, :boolean, default: false, null: false
      add :rsvp_at, :date
      add :attending, :boolean, default: false, null: false
      add :dessert_choice, :string
      add :dietary_requirements, :text
      add :invite_id, references(:invites, on_delete: :nothing)

      timestamps()
    end

    create index(:people, [:invite_id])
  end
end
