$(document).ready(function(){
    $("#btn").click(function(){

        var tt = $("#username").val();

        if($('#password').val() == '') {
            alert('Password field is empty');
        }
        else if ($('#username').val() == '') {
            alert('User name is empty');
        }
        else
        {
            alert('Welcome ' + tt);
            $("#username").val("");
            $("#password").val("");
        }
    })
})