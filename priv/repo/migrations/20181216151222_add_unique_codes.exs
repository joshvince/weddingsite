defmodule Weddingsite.Repo.Migrations.AddUniqueCodes do
  use Ecto.Migration

  def change do
    create unique_index(:invites, [:code])
  end
end
