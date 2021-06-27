// let email=document.getElementById("email");
// let pws=document.getElementById("pws");
// if(email="admin"){
//     alert("login successfull");
   
// }
let username = document.getElementById("username");
     let error= document.getElementById("error");
     let password=document.getElementById("password");
     function formvalidate(){
     if(username.value=="admin"&&password.value=="admin123"){

  alert("Login Successful ")

return true;
     }

else{
         alert("Login Failed.Try again");
return false;
     }
     }