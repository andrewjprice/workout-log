Rails.application.routes.draw do
  devise_for :users

  authenticated :user do
    root 'authenticated#index', as: :authenticated_root

    resources :workouts
  end

  root 'pages#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
