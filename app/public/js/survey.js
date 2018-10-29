const validate = function(){
    let valid = true;
    $('input').each(function(){
        if(!$(this).val())
        valid = false;
    });

    $('.custom-select').each(function(){
        if(!$(this).val())
        valid = false;
    })
    return valid;
}

const getEmpObj = function () {
        let employee = {
            name: $('#name').val(),
            photo: $('#photo').val(),
            scores: [$('#q1').val(), $('#q2').val(), $('#q3').val(), $('#q4').val(), $('#q5').val(), $('#q6').val(), $('#q7').val(), $('#q8').val(), $('#q9').val(), $('#q10').val(),]
        }
        return employee;    
    }


const submitSurvey = function (employee) {
    console.log(employee);
    $.ajax({
        url: '/api/employees',
        method: "POST",
        data: employee,
    }).then(function (response) {
        $('#match-name').text(response.name);
        console.log(response.photo);
        $('#match-img').attr("src", response.photo);
        $('#results-modal').modal('toggle');
    });
}

const run = function (event) {
    event.preventDefault();
    const employee = getEmpObj();
    if (validate())
    submitSurvey(employee);
    else
    alert("Please Fill out all fields");
}

$('#submit').on('click', run);
