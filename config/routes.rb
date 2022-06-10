Rails.application.routes.draw do
  
  resources :appointments, only: [:index, :create, :show, :destroy]
  resources :scores, only: [:index, :create, :show, :destroy]
  resources :patients, only: [:index, :create, :show, :destroy]
  resources :doctors, only: [:index, :create, :show, :destroy]

  post '/sign_up', to: "registrations#create"

  post '/login', to: "sessions#create"

  delete '/logout', to: "sessions#destroy"

  get '/auth', to: "doctors#show"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
