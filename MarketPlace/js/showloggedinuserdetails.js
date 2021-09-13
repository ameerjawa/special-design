'use strict';

var user = JSON.parse(sessionStorage.getItem("loggedinUser"));


if (user!=null){
    document.getElementById("welcomeuser").innerHTML="welcome "+user["username"];
    document.getElementById("loginhref").innerHTML="logout"

}



