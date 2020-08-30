Rails.application.routes.draw do
  resource :articles
  get '*page', to: 'static#index', contraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  root 'static#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
