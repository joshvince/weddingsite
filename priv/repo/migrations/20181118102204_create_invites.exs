defmodule Weddingsite.Repo.Migrations.CreateInvites do
  use Ecto.Migration

  def change do
    create table(:invites) do
      add :code, :string
      add :family_name, :string
      add :email, :string
      add :day_guests, :boolean, default: false, null: false

      timestamps()
    end

  end
end
