Rails.application.routes.draw do
  root to: 'pages#root'

  #Match all routes
  match "*path", to: "pages#root", via: :all
end
