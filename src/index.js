require('dotenv').config();
const app = require('./server');

//Seeders
const RunMigration = require('./seeders/migrations');
RunMigration();

app.listen(process.env.PORT || 80);

