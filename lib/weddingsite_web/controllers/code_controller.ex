defmodule WeddingsiteWeb.CodeController do
  use WeddingsiteWeb, :controller

  alias Weddingsite.ThreeWords

  def get_new_code(conn, _params) do
    new_code = ThreeWords.generate()
    render(conn, "code.json", code: new_code)
  end
end