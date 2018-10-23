const express = require('express');
const app = express();
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes')(app);


const PORT = 8080;

app.listen(PORT, function(){
    console.log ('app listening on port ' + PORT);
})