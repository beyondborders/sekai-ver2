Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    namespace :v1 do

      scope "(/:locale)", locale: /#{I18n.available_locales.join("|")}/, defaults: {locale: "ja"} do

        resources :about_sekai, only: [:index]

        resources :inquiries, only: [:create]

        resources :seminars, only: [:show] do
          collection do
            post 'search'
          end
        end

        resources :posts, only: [:show] do
          collection do
            post 'search'
          end
        end

        resources :projects, only: [:show]
        resources :properties, only: [:show]

        match '/property_materials/search', to: 'property_materials#search', via: :post

        match '/guides/search', to: 'guides#search', via: :post
        match '/guides/url', to: 'guides#show_by_url', via: :get
      
      end

    end
  end

end
