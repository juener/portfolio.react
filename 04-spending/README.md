# juener/portfolio.react/04-spending

## How to use the backend?
For this project, it's used the json-server, which it persists to the /server.json file, each object is a route, example:
- [GET, POST, PATCH, PUT, DELETE]/transactions 
- [GET, POST, PATCH, PUT, DELETE]/categories 
- [GET, POST, PATCH, PUT, DELETE]/currencies 

To start the backend execute ```npm run dev:server``` it's going to be ran at http://localhost:3001


## How to use the frontend?
To perform the frontend execute ```npm run dev``` it's going to be ran at http://localhost:3000

- [x] Transactions CRUD
- [x] Transactions search
- [x] Balance per currency
- [x] Balance converted to a specific currency
- [x] Categories CRUD
- [x] Currencies CRUD