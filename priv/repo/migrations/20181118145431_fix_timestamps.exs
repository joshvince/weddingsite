defmodule Weddingsite.Repo.Migrations.FixTimestamps do
  use Ecto.Migration

  def change do
    alter table(:people) do
      modify :rsvp_at, :naive_datetime
    end
  end
end
