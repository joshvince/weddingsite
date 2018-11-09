defmodule WeddingsiteWeb.PageController do
  use WeddingsiteWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
