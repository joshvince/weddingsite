defmodule WeddingsiteWeb.CodeView do
  use WeddingsiteWeb, :view

  def render("code.json", %{code: code}) do
    %{code: code}
  end
end