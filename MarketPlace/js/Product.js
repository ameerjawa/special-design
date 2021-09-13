'use strict';



var products=JSON.parse(localStorage.getItem("Products"));

$("#prospects_form").submit(function(e) {
    e.preventDefault();
});


function addnewproduct(){

    var productname=document.getElementById("productname").value;
    var proImg=document.getElementById("proImg").value;
    var sedorinumber=document.getElementById("sedorinumber").value;
    var price=document.getElementById("price").value;
    var priced=document.getElementById("priced").value;
    var descreption=document.getElementById("descreption").value;
    var category=document.getElementById("category").value;

    var product = new Product(sedorinumber,productname,price,priced,proImg,descreption,category);

    products.push(product);
    localStorage.setItem("Products",JSON.stringify(products));
    alert("the product was added succesfully");
    window.location.href="/MarketPlace/ProductManagment.html"


}



class Product{
    constructor(sedorinumber,name,price,priceaftermev,image,descreption,category){
        this.sedorinumber=sedorinumber;
        this.name=name;
        this.price=price;
        this.priceaftermev=priceaftermev;
        this.image=image;
        this.descreption=descreption;
        this.category=category;

    }
}


 
function updateproduct(){
    
    
    var productname=document.getElementById("productname").value;
    var proImg=document.getElementById("proImg").value;
    var sedorinumber=document.getElementById("sedorinumber").value;
    var price=document.getElementById("price").value;
    var priced=document.getElementById("priced").value;
    var descreption=document.getElementById("descreption").value;
    var category=document.getElementById("category").value;
    
    var templist=[];
    var number= JSON.parse(sessionStorage.getItem("activeusernumber"));

    


    for(var i=0;i<products.length;i++){
        if(i !== number){
            templist.push(products[i])

        }
    }

    
        var product = new Product(sedorinumber,productname,price,priced,proImg,descreption,category);
        templist.push(product);
        
        
        localStorage.setItem('Products',JSON.stringify(templist));
        alert("you have updated details successfuly , redierect to ProductManagment page ");
        window.location.replace('/MarketPlace/ProductManagment.html');
        
        return false;
     
}