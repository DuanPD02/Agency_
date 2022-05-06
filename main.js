//function input(x,y){
  //  let x = document.getElementById("y").value;
//}
function validateForm(){
const Name = document.getElementById("Name").value;
const Name_error = document.getElementById("Name_error");
if(!Name){
    Name_error.innerHTML="This field is require";
}
else{
    Name_error.innerHTML="";
}
const Number = document.getElementById("Number").value;
const Number_error = document.getElementById("Number_error");
if(!Number){
    Number_error.innerHTML="This field is require";
}else{
    Number_error.innerHTML=" ";
}
const Email = document.getElementById("Email").value;
const Email_error = document.getElementById("Email_error");
if(!Email){
    Email_error.innerHTML="This field is require";
}else{
    Email_error.innerHTML=" "; 
}

const Message = document.getElementById("Message").value;
const Message_error = document.getElementById("Message_error");
if(!Message){
    Message_error.innerHTML="This field is require";
}else{
    Message_error.innerHTML=" ";
}

}
