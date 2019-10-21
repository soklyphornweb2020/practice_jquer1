$(document).ready(function () {
    $(button).on('click', function () {
        let user = $('#user').val();
        let pass = $('#pass').val();
        let email = $('#email').val();
        isUser(user);
        isPass(pass);
        isEmail(email);
    });
});

function setSuccess(success, label) {
    $('#' + success).addClass('border.success').removeClass('border-danger');
    $('#' + label).addClass('text.success').removeClass('text-danger');
}

function setError(error, label) {
    $('#' + error).addClass('border.danger').removeClass('border-success');
    $('#' + label).addClass('text.danger').removeClass('text-success');
}

function isUser(u){
    u == " " ? setError('user','u-label'): setSuccess('user','u-label');
}

function isPass(p){
    p == " " ? setError('pass','p-label'): setSuccess('pass','p-label');
}

function isEmail(e){
    e == " " ? setError('email','e-label'): setSuccess('email','e-label');
}