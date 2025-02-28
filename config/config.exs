# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :weddingsite,
  ecto_repos: [Weddingsite.Repo]

# Configures the endpoint
config :weddingsite, WeddingsiteWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "V47dMPFkbQySh/5bBv4pWyS3x6BTaVHYHyjCXBob/0WbexSQtskXgVh9HO4D0fo5",
  render_errors: [view: WeddingsiteWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Weddingsite.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

config :weddingsite, admin_basic_auth: [
  username: "admin",
  password: {:system, "WEDDINGSITE_PASSWORD"}
]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
