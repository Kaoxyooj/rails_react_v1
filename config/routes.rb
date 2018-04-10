Rails.application.routes.draw do
  root to: 'pages#root'
  get "/test", to: 'pages#root'
end
