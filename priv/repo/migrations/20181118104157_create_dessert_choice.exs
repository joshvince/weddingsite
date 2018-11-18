defmodule Weddingsite.Repo.Migrations.CreateDessertChoice do
  use Ecto.Migration

  alias Weddingsite.Guests.DessertChoiceEnum

  def up do
    DessertChoiceEnum.create_type()
  end

  def down do
    DessertChoiceEnum.drop_type()
  end
end
