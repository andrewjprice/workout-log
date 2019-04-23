Rails.application.routes.draw do
  devise_for :users

  authenticated :user do
    root 'workouts#index', as: :authenticated_root

    resources :workouts
  end

  root 'pages#index'
end
