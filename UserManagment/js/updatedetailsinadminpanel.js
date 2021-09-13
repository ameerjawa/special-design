'use strict';


var userslist=JSON.parse(localStorage.getItem("all_users"));

$("#prospects_form").submit(function(e) {
    e.preventDefault();
}); 


function update(){

    console.log("111111111111111");


    
    var username= document.getElementById("username").value;
    var password= document.getElementById("pwd").value;
    var profileimage= document.getElementById("proImg").value;
    var firstname= document.getElementById("firstname").value;
    var lastname= document.getElementById("lastname").value;
    var email= document.getElementById("email").value;
    var birthdate= document.getElementById("birthdate").value;
    var City= document.getElementById("City").value;
    var Street= document.getElementById("Street").value;
    var number= document.getElementById("number").value;
    var templist=[];
    var flag=true;
    var number= JSON.parse(sessionStorage.getItem("activeusernumber"));
    console.log(number);

    


    for(var i=0;i<userslist.length;i++){
        if(i !== number){
            templist.push(userslist[i])

        }
    }

    for(var i=0;i<templist.length;i++){
        
        if(templist[i]["mail"]==email)
        {
            flag=false;
 
        }
    }

    if(flag){
        var user = new User(username,password,profileimage,firstname,lastname,email,birthdate,City,Street,number);
        templist.push(user);
        
        
        localStorage.setItem('all_users',JSON.stringify(templist));
        alert("you have updated details successfuly , redierect to admin panel page ");
        window.location.replace('/UserManagment/adminpanel.html');
        
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