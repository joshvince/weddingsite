defmodule WeddingsiteWeb.Router do
  use WeddingsiteWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", WeddingsiteWeb do
    pipe_through :browser

    get "/", PageController, :index
    resources "/invites", InviteController
    resources "/people", PersonController
  end

  # Other scopes may use custom stacks.
  scope "/api", WeddingsiteWeb do
    pipe_through :api

    get "/codes", CodeController, :get_new_code
  end
end
