'use strict';
let landingpage1 = document.querySelector(".landingpage");
let imgarray = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];
landingpage1.style.backgroundImage = 'url("img/img2.jpg")';

setInterval(() => {
    let randomnumber = Math.floor(Math.random()* imgarray.length);
    landingpage1.style.backgroundImage = 'url("img/' + imgarray[randomnumber] + '")';
},4000);
///////////////////////////

////////////////////////////
const colorli = document.querySelectorAll(".color-list li");
colorli.forEach(li =>{
li.addEventListener("click",(e)=>{
document.documentElement.style.setProperty('--main-color',e.target.dataset.color)
});
});


localStorage.setItem("all_users",JSON.stringify([]));
localStorage.setItem("Market_all_users",JSON.stringify([]));
localStorage.setItem("Products",JSON.stringify([]));
