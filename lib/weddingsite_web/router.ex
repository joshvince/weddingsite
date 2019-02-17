defmodule WeddingsiteWeb.Router do
  use WeddingsiteWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug BasicAuth, use_config: {:weddingsite, :admin_basic_auth}
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", WeddingsiteWeb do
    pipe_through :browser

    get "/", DashboardController, :index
    # dashboard routes
    get "/attending_people", PersonController, :attending_people
    get "/attending_day_guests", PersonController, :attending_day_guests
    get "/attending_evening_guests", PersonController, :attending_evening_guests
    get "/responded_people", PersonController, :responded_people
    get "/not_yet_responded_people", PersonController, :not_yet_responded_people
    get "/cant_attend_people", PersonController, :cant_attend_people
    get "/cheesecakes", PersonController, :cheesecakes
    get "/tarts", PersonController, :tarts
    get "/with_dietary_requirements", PersonController, :with_dietary_requirements
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

    get "/showmethemoneysean", RSVPController, :check_code

    get "/codes/get", CodeController, :get_new_code
    get "/rsvp_check", RSVPController, :check_code
    get "/rsvp/:code", RSVPController, :show_json
    post "/rsvp/:code", RSVPController, :rsvp_reply

  end
end
