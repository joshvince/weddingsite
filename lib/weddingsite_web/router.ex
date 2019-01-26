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
  end

  scope "/admin", WeddingsiteWeb do
    pipe_through :browser


    resources "/invites", InviteController
    get "/invites/:id/guests", InviteController, :guests
    post "/invites/:id/update_guests", InviteController, :update_guests
    resources "/people", PersonController
  end

  # Our API serves the frontend client app
  scope "/api", WeddingsiteWeb do
    pipe_through :api

    get "/codes/get", CodeController, :get_new_code
    get "/rsvp_check", RSVPController, :check_code
    get "/rsvp/:code", RSVPController, :show_json
    post "/rsvp/:code", RSVPController, :rsvp_reply

  end
end
