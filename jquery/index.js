function isEmail(inputEmail) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(inputEmail);
}
function validatePassword(inputPassword) {
	return inputPassword.length > 4;
}
$(document).ready(function(){
    $('#email').change(function(){
        var email = $(this).val().trim();
        if(!isEmail(email)) {
            $(".emailError").html("Email is not valid format");
        } else {
            $(".emailError").html("");
        }
    });
    $('#password').change(function(){
        var password = $(this).val();	
        if(!validatePassword(password)) {
			$(".passError").html("Password must be at least 5 characters");
		} else {
			$(".passError").html("");
		}
    });
    $('#emailre').change(function(){
        var emailre = $(this).val().trim();
        if(!isEmail(emailre)) {
            $(".emailErrorre").html("Email is not valid format");
        } else {
            $(".emailErrorre").html("");
        }
    });
    $('#passwordre').change(function(){
        var passwordre = $(this).val();	
        if(!validatePassword(passwordre)) {
			$(".passErrorre").html("Password must be at least 5 characters");
		} else {
			$(".passErrorre").html("");
		}
       
    });
    $('#confirmpass').change(function(){
        var passwordco = $(this).val();
        if(passwordco!=$("#passwordre").val()){
            $(".passErrorco").html("Password confirm is not correct");
        } else {
            $(".passErrorco").html("");
        }      
    });
});