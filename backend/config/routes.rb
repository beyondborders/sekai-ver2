Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    namespace :v1 do

      resources :about_sekai, only: [:index]

      resources :seminars, only: [:show] do
        collection do
          post 'search'
        end
      end

      resources :property_materials, only: [:show] do
        collection do
          post 'search'
        end
      end

    end
  end

end
