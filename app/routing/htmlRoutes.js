module.exports = function (app) {
    const path = require('path');
    app.get('/', function (request, response) {
        response.sendFile(path.join(__dirname, '../public/home.html'));
    });

    app.get('/survey', function(req,res){
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    })  
}