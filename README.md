# Microfrontends. 

## Two packages with same name but different versions.



## Development server

Run `npm run start-main` to run main application. It will be start on `localhost:4200`.

Run `npm run start-new` to run new application. It will be start on `localhost:4201/new-moment`.

There is proxy in the `main` application that redirects all requests from `/new-moment` to `http://localhost:4201/new-moment`
