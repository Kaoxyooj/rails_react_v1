# Rails React v1

This is a Rails with React template project using Rails 5.2.

## Install Foreman
#### Important:  Do this outside of your project directory

```
gem install foreman
```

## Commands
#### To Start Server 
```
foreman start -f Procfile.dev -p 3000
```

#### Run this Command if foreman doesn't start
```
yarn upgrade webpack-dev-server@^2.11.1 -D
```


## Routes
All routes are directed to the the root path: 'pages#root'.  React handles all of the routing from routes.js

## Original Source

https://blog.grillwork.io/create-a-ruby-on-rails-5-1-application-with-webpack-react-16-and-react-router-e2c16d267f73
