
defmodule Weddingsite.ThreeWords do
@moduledoc """
Generates the three words to be used as invite codes for guests.
"""
  @doc """
  Generate a randomised N word string to be used on invitations.
  This function can be called with no arguments, in which case default
  categories will be traversed.

  Otherwise, call this with a list of lists, representing the
  categories you want. (I use this to be able to test)
  """
  def generate(categories) do
    categories
    |> random_values()
    |> build_string()
  end

  def generate() do
    default_categories = [brighton(), baking(), holidays()]
    generate(default_categories)
  end

  # Private

  defp build_string(values) do
    values
    |> Enum.shuffle()
    |> Enum.join("-")
    |> String.downcase()
  end

  defp random_values(categories) do
    Enum.map(categories, &Enum.random(&1))
  end

  # Default categories

  defp brighton() do
    [
      "Bruno",
      "Dunk",
      "Zamora",
      "Murray",
      "Cullip",
      "March",
      "Knight",
      "Hart",
      "Mayo",
      "Gross"
    ]
  end

  defp baking() do
    [
      "Cookie",
      "Cake",
      "Flapjack",
      "Cheesecake",
      "Brownie",
      "Muffin",
      "Biscuit",
      "Cupcake",
      "Pastry",
      "Danish"
    ]
  end

  defp holidays() do
    [
      "Madrid",
      "Paris",
      "Vegas",
      "Toronto",
      "Portland",
      "Munich",
      "Berlin",
      "Verona",
      "Seattle",
      "Porto"
    ]
  end
end
