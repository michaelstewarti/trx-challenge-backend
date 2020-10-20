# trx-backend-challenge

## Steps to run

1) Create a file ```./.env``` with the contents of ```./.env.example```.
2) Create a file ```./config/config.son``` with the contents of ```./config/config.example.json```.
3) Create a database with the name provided in ```./config/config.son```, in the local postgres instance.
4) Run migrations with ```npx sequelize db:migrate```.
5) Start the app with ```npm start```.
6) Try endpoints with provided postman collection ```./trx-backend-challenge.postman_collection.json```
