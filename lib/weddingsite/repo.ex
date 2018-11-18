defmodule Weddingsite.Repo do
  use Ecto.Repo,
    otp_app: :weddingsite,
    adapter: Ecto.Adapters.Postgres
end
