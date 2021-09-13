"use strict";

sessionStorage.clear();

$("#prospects_form").submit(function (e) {
  e.preventDefault();
});
var userslist = JSON.parse(localStorage.getItem("Market_all_users"));

function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("pwd").value;
  var user;
  var flag = false;
  if (username == "admin" && password == "admin1234admin") {
    alert("welcome admin ! redirect to admin panel page");
    window.location.href = "/MarketPlace/adminpanel.html";
  }

  for (var i = 0; i < userslist.length; i++) {
    if (
      userslist[i]["username"] == username &&
      userslist[i]["password"] == password
    ) {
      flag = true;
      user = userslist[i];
    }
  }

  if (flag) {
    alert("logged in succesfully! redierected to profile page");

    window.location.href = "/MarketPlace/index.html";
    sessionStorage.setItem("loggedinUser", JSON.stringify(user));
  }
}
