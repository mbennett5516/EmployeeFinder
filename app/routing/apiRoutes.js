module.exports = function (app, employees) {
    app.get('/api/employees', function (req, res) {
        res.json(employees.employeeList);
    });

    app.post('/api/employees', function (req, res) {
        console.log(req.body);
        let difference = 99;
        let index = 0;
        for (let i = 0; i < employees.employeeList.length; i++) {
            let tempIndex = i;
            let sum = 0;
            tempArray = [];
            for (let j = 0; j < req.body.scores.length; j++) {
                if (req.body.scores[j] >= employees.employeeList[i].scores[j])
                    tempArray.push(req.body.scores[j] - employees.employeeList[i].scores[j])
                else
                    tempArray.push(employees.employeeList[i].scores[j] - req.body.scores[j])
            }
            for (let j = 0; j < tempArray.length; j++) {
                sum += tempArray[j];
            }
            if (sum < difference) {
                difference = sum;
                index = tempIndex;
            }
        }
        res.json(employees.employeeList[index]);
    })

};