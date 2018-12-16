defmodule Weddingsite.ThreeWordsTest do
  use ExUnit.Case, async: true

  alias Weddingsite.ThreeWords

  @brighton_inputs ["bruno", "murray", "dunk"]
  @baking_inputs ["flapjack", "cookie", "cake"]
  @holiday_inputs ["vegas", "newyork", "paris"]
  @inputs [@brighton_inputs, @baking_inputs, @holiday_inputs]

  def return_source(string) do
    Enum.filter(@inputs, fn list -> string in list end)
  end

  def generate_and_deconstruct() do
    ThreeWords.generate(@inputs)
    |> String.split("-")
    |> Enum.map(&return_source(&1))
  end

  test "returns three random words" do
    result = generate_and_deconstruct()
    assert Enum.count(result) == 3
  end

  test "each word should be from a different column" do
    result = generate_and_deconstruct()
    assert Enum.count(result) == Enum.count(@inputs)
  end
end
