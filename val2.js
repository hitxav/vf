function CheckEmpty(field_id){
  var MyValue=document.getElementById(field_id);
  if(MyValue.value == "" || MyValue.value == null)
  {
  	displayWarning(field_id,MyValue.parentNode.id,"Fill in the space")
  }
  else {
  	removeWarning(field_id,MyValue.parentNode.id)
  }
}


function ValidateName(name){
	var MyName=document.getElementById(name);
    if (MyName.value.length<3){
    	displayWarning(name,MyName.parentNode.id,"Name should have at least 3 characters");
    }
}


function ValidateEmail(email){
	var MyEmail = document.getElementById(email);
	var format=/.+@.+/;
	if(!MyEmail.value.match(format)){
		displayWarning(email,MyEmail.parentNode.id,"Please enter a valid email id");
	}
}



	function cpassword() {

        var pass = document.getElementById("password").value;
         if (pass.length <= 6) {
            document.getElementById("passmsg").innerHTML = "password field must contain 6 characters";
            return true;
        } else if (pass.length >= 6) {
            var n = 0,
                c = 0,
                l, i = 0;
            l = pass.length;
            for (i = 0; i < l; i++) {
                if (pass.charAt(i) >= '0' && pass.charAt(i) <= '9')
                    n++;
                if (pass.charAt(i) >= 'a' && pass.charAt(i) <= 'z')
                    c++;
                if (pass.charAt(i) >= 'A' && pass.charAt(i) <= 'Z')
                    c++;
                if (n == 0 || c == 0) {
                    document.getElementById("passmsg").innerHTML = "password must contains both number and alphabets";
                } else
                    document.getElementById("passmsg").innerHTML = "";
            }
        }
    }



function ValidateAge(age){
	var MyAge = document.getElementById(age);
	if (MyAge.value<10 || MyAge.value>90)
	{
		displayWarning(age,MyAge.parentNode.id,"The age should be between 10-90");
	}
}







function displayWarning(field_id,parent_div,message){
	var x=document.getElementById(parent_div).querySelectorAll(".warning_msg").length;
    if (x==0){
    var para =document.createElement("p");
	para.setAttribute("class","warning_msg");
	var error_msg=document.createTextNode(message);
	para.appendChild(error_msg);
	document.getElementById(parent_div).appendChild(para);
   
}
}


function removeWarning(field_id,parent_div){
	var error_element=document.getElementById(parent_div).querySelectorAll(".warning_msg");
if(error_element.length > 0){
	error_element[0].parentNode.removeChild(error_element[0]);
    document.getElementById(field_id).classList.remove("warning_msg");
     
}

}