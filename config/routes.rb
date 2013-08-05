Labs::Application.routes.draw do

  namespace :api do
    resource  :sessions
    resources :projects
    resources :parts
    resources :posts
    resources :suggestions
    resources :comments
  end

  get '*resource', to: 'static#ember'
  root to: 'static#ember'

end
