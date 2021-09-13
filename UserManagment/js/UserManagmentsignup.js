
'use strict';


var userslist= JSON.parse( localStorage.getItem('all_users'));






$('#pwd, #pwd2').on('keyup', function () {
    if ($('#pwd').val() == $('#pwd2').val()) {
      $('#message').html('Matching').css('color', 'green');
    } else 
      $('#message').html('Not Matching').css('color', 'red');
  });



  $("#prospects_form").submit(function(e) {
    e.preventDefault();
});


function signup()

{


    
    

    

   var username= document.getElementById("username").value;
   var password= document.getElementById("pwd").value;
   var vpassword= document.getElementById("pwd2").value;
   var profileimage= document.getElementById("proImg").value;
   var firstname= document.getElementById("firstname").value;
   var lastname= document.getElementById("lastname").value;
   var email= document.getElementById("email").value;
   var birthdate= document.getElementById("birthdate").value;
   var City= document.getElementById("City").value;
   var Street= document.getElementById("Street").value;
   var number= document.getElementById("number").value;


   var flag=true;
   

   for(var i=0;i<userslist.length;i++){
       
       if(userslist[i]["mail"]==email)
       {
           flag=false;

       }
   }
   if(flag){
    var user = new User(username,password,profileimage,firstname,lastname,email,birthdate,City,Street,number);
    userslist.push(user);
    
    
    localStorage.setItem('all_users',JSON.stringify(userslist));
    alert("you have signed up successfuly , redierect to login page ");
    window.location.replace('/UserManagment/UserManagmentlogin.html');
    
    return false;
   }else{
    alert("Existing email!! retype your email correctly");

   }





}







class User{

    


    constructor(username,password,proImg,firstname,lastname,mail,birthDate,city,street,number){
        this.username=username;
        this.password=password;
        this.proImg=proImg;
        this.firstname=firstname;
        this.lastname=lastname;
        this.mail=mail;
        this.birthDate=birthDate;
        this.city=city;
        this.street=street;
        this.number=number;

    }

    getFullName(){
        return this.firstname+" "+this.lastname;
    }
    getBirthDate(){
        return this.birthDate;
    }

    updateDetails(username,password,proImg,firstname,lastname,mail,birthDate,city,street,number){
        this.username=username;
        this.password=password;
        this.proImg=proImg;
        this.firstname=firstname;
        this.lastname=lastname;
        this.mail=mail;
        this.birthDate=birthDate;
        this.city=city;
        this.street=street;
        this.number=number;
    }
}