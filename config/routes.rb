Labs::Application.routes.draw do

  namespace :api do
    resources :projects
    resources :parts
    resources :posts
    resources :suggestions
    resources :comments
    resources :topics
  end

  get '*resource', to: 'static#ember'
  root to: 'static#ember'

end
