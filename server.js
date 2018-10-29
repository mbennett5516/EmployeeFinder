const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, '/app/public')));
let employees = require('./app/data/employees.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app, employees);



const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
    console.log ('app listening on port ' + PORT);
})