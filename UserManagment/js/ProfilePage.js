'use strict';









if(sessionStorage.getItem("loggedinUser")==null){
    alert("you are not logged in! redirect to login page ");
    window.location.href="/UserManagment/UserManagmentlogin.html";
}


var  user = JSON.parse(sessionStorage.getItem("loggedinUser"));

 console.log(user);
document.getElementById("usernameplace").innerHTML = user["firstname"]+" "+user["lastname"];
document.getElementById("emailplace").innerHTML = user["mail"];
document.getElementById("addressplace").innerHTML = user["street"]+" "+user["city"];
document.getElementById("birthdateplace").innerHTML = user["birthDate"];

document.getElementById("logoutbtn").onclick=function (){
    console.log("11111111111111");
    sessionStorage.clear();
    window.location.href="/UserManagment/UserManagmentlogin.html";

}

document.getElementById("gotogamebtn").onclick=function (){
    window.location.href="/UserManagment/Game/main.html";


}

document.getElementById("editprofilebtn").onclick=function(){
    window.location.href="/UserManagment/UserManagmentUpdateDetails.html";

}