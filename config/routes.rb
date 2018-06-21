Rails.application.routes.draw do
  resources :locations
  # get "whereyat" => "map#where"
  get "whereyat" => "locations#index"
  get "riderprofile" => "riders#index"
  get "newlocation" => "locations#new"

  resources :riders
  devise_for :users

  root "riders#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
