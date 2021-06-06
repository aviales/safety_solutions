Rails.application.routes.draw do
  
  devise_for :users, controllers: {
    registrations:'users/registrations',
    sessions: 'users/sessions' 
  }
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  
  resources :contractors
  resources :users
  resources :work_areas
  resources :check_list_items
  resources :check_lists
  resources :contractor_types
  resources :projects do 
    resources :inspeccions
  end
  resources :todo_lists do
  	resources :todo_items do
  		member do
  			patch :complete
  		end	
  	end
  end	
  get 'inspeccions', to:'inspeccions#index', as:'inspeccions'
  post "/inspeccions", to: 'inspeccions#create'
  get 'contractors/:id/api', to: 'contractors#api', as: 'api'
  get 'projects/:id/api_v1', to: 'projects#api_project', as: 'api_v1'
  get 'about', to:'home#about', as:'abouts'
  get 'service', to:'home#services', as:'services'
  get 'contact', to:'home#contact', as:'contacts'
  root'home#index'
end

