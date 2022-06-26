require('dotenv').config();
const app = require('./server');

//Seeders


app.listen(process.env.PORT || 80);

