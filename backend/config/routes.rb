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

      match '/property_materials/search', to: 'property_materials#search', via: :post

      match '/guides/search', to: 'guides#search', via: :post
      match '/guides/url', to: 'guides#show_by_url', via: :get

    end
  end

end
