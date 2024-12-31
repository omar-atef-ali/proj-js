var section1 = document.querySelector(".section")


var products= [
    
    
    {
        id:1,
        Image:"./photos/375x500.30915.jpg",
        title:"Solo Yanbal",
        category:"men",
        price:"52",
    },
    
    {
        id:2,
        Image:"./photos/216737822_IN.webp",
        title:"loewe solo",
        category:"men",
        price:"45",
    },
    {
        id:3,
        Image:"./photos/975000.jpg",
        title:"white rice",
        category:"men",
        price:"48",
    },
    

]
function drawitem(){
    let y = products.map((item)=>{
        return `
        <div class="product">
                    <img src="${item.Image}" alt="">
                    <div style="width: 100%; height: 90px; font-size: 20px; padding-left: 15px; font-family: Georgia, 'Times New Roman', Times, serif;" class="description">
                        <p style="font-weight: bold; font-size: 17px;" class="product-name">product: ${item.title}</p>
                        <p style="margin-top: -10px; font-weight: bold; font-size: 17px; class="Category"">category:${item.category}</p>
                        <p style="margin-top: -10px; font-weight: bold; font-size: 17px;">price: $${item.price}</p>
                        <div class="content" style="display: flex; justify-content: space-between;">
                            <button type="button" class="btn-sm btn-primary addbtn" onClick="addToCart(${item.id})">add to cart</button>
                            <button type="button" class="btn-sm btn-danger removebtn" >remove</button>
                            <i class="fa-solid fa-heart hearticon" style="margin-right: 20px; cursor:pointer;" onClick="addTofav(${item.id})"></i>
                        </div>
                    </div>

                </div>

        
            `
        


    }).join('');
    section1.innerHTML = y
}
drawitem()

///////////////////////////////////////////////////////

var section2 = document.querySelector(".section2")


var products2= [
    
    
    {
        id:4,
        Image:"./photos/images.jpeg",
        title:"white oud",
        category:"unisex",
        price:"33",
    },
    
    {
        id:5,
        Image:"./photos/YSL_Libre_Intense_90-ovlu41s04goc73h34rb2foe8ek9ncfrndpwrfo1d9s.jpg",
        title:"YSL libre",
        category:"women",
        price:"40",
    },
    {
        id:6,
        Image:"./photos/1699477052-parfums-de-marly-delina-654bf6216e62a.avif",
        title:"Byredo mojave",
        category:"women",
        price:"39",
    },
    

]
function drawitem2(){
    let y = products2.map((item2)=>{
        return `
        <div class="product" >
                    <img src="${item2.Image}" alt="">
                    <div style="width: 100%; height: 90px; font-size: 20px; padding-left: 15px; font-family: Georgia, 'Times New Roman', Times, serif;" class="description">
                        <p style="font-weight: bold; font-size: 17px;" class="product-name">product: ${item2.title}</p>
                        <p style="margin-top: -10px; font-weight: bold; font-size: 17px;" class="Category">category:${item2.category}</p>
                        <p style="margin-top: -10px; font-weight: bold; font-size: 17px;">price: $${item2.price}</p>
                        <div class="content" style="display: flex; justify-content: space-between;">
                            <button type="button" class="btn-sm btn-primary addbtn" onClick="addToCart2(${item2.id})">add to cart</button>
                            <button type="button" class="btn-sm btn-danger removebtn" >remove</button>
                            <i class="fa-solid fa-heart hearticon" style="margin-right: 20px; cursor:pointer;" onClick="addTofav2(${item2.id})"></i>
                        </div>
                    </div>

                </div>

        
            `
        


    }).join('');
    section2.innerHTML = y
}
drawitem2()

///////////////////////////////////////////////////////////////////

var section3 = document.querySelector(".section3")


var products3= [
    
    
    {
        id:7,
        Image:"./photos/11111.avif",
        title:"my way",
        category:"women",
        price:"50",
    },
    
    {
        id:8,
        Image:"./photos/222.avif",
        title:"chance chanel",
        category:"women",
        price:"35",
    },
    {
        id:9,
        Image:"./photos/Sprinkle.webp",
        title:"acura passion",
        category:"women",
        price:"48",
    },
    

]
function drawitem3(){
    let y = products3.map((item3)=>{
        return `
        <div class="product" >
                    <img src="${item3.Image}" alt="">
                    <div style="width: 100%; height: 90px; font-size: 20px; padding-left: 15px; font-family: Georgia, 'Times New Roman', Times, serif;" class="description">
                        <p style="font-weight: bold; font-size: 17px;" class="product-name">product: ${item3.title}</p>
                        <p style="margin-top: -10px; font-weight: bold; font-size: 17px;" class="Category">category:${item3.category}</p>
                        <p style="margin-top: -10px; font-weight: bold; font-size: 17px;">price: $${item3.price}</p>
                        <div class="content" style="display: flex; justify-content: space-between;">
                            <button type="button" class="btn-sm btn-primary addbtn" onClick="addToCart3(${item3.id})">add to cart</button>
                            <button type="button" class="btn-sm btn-danger removebtn" >remove</button>
                            
                            <i class="fa-solid fa-heart hearticon" style="margin-right: 20px; cursor:pointer;" onClick="addTofav3(${item3.id})"></i>
                        </div>
                    </div>

                </div>

        
            `
        


    }).join('');
    section3.innerHTML = y
}
drawitem3()



// // ///////////////////////////////////////////////////////////////////////////////////



var addbtn = document.querySelectorAll(".addbtn")
var removebtn = document.querySelectorAll(".removebtn")
var cartnames = document.querySelector(".cart-names")

var number = document.querySelector(".number")

var hearticon = document.querySelectorAll(".hearticon")


addbtn.forEach(function(btn){
    btn.addEventListener("click" , function(){
        if(localStorage.getItem("username")){
            btn.style.display ="none"
            // removebtn[index].style.display = "block";
            
    
        }else{

            window.location = "login.html"
        }
    })

})

hearticon.forEach(function(heartIcon) {
    heartIcon.addEventListener("click", function() {
        if(localStorage.getItem("username")){
             heartIcon.style.color = "red"
            
            
    
        }else{

            window.location = "login.html"
        }
       
    });
});

/////////////////////////////////////////////////////////////////////

let addedItem = []
let favarr = []


function addToCart(id){
    let choosenItem = products.find((item) => item.id === id )

    cartnames.innerHTML += `<div class="selected"> <p class="choosen">${choosenItem.title} </p> 
    <div>
    <span class="pieces">1</span> 
    <span class="positive">+</span> 
    <span class="nagative">-</span> 
    </div>
    </div>`

    addedItem = [...addedItem , choosenItem]
    localStorage.setItem ("addedtocart" , JSON.stringify(addedItem) )

    let cartProductsLength = document.querySelectorAll(".cart-names p")

    number.style.display ="block"
    number.innerHTML = cartProductsLength.length

}


function addTofav(id){
    let favitem = products.find((item) => item.id === id)
    favarr = [...favarr , favitem]

    localStorage.setItem ("addedtofav" , JSON.stringify(favarr) )

    

}

/////////////////////////////////////////////////////////////////////////////////////////////////


function addToCart2(id2){
    let choosenItem2 = products2.find((item) =>item.id === id2)

    cartnames.innerHTML += `<div class="selected"> <p class="choosen">${choosenItem2.title} </p> 
    <div>
    <span class="pieces">1</span> 
    <span class="positive">+</span> 
    <span class="nagative">-</span> 
    </div>
    </div>`
    let cartProductsLength = document.querySelectorAll(".cart-names p")
    addedItem = [...addedItem , choosenItem2]
    localStorage.setItem ("addedtocart" , JSON.stringify(addedItem))
    number.style.display ="block"
    number.innerHTML = cartProductsLength.length

}

function addTofav2(id2){
    let favitem = products2.find((item) => item.id === id2)
    favarr = [...favarr , favitem]

    localStorage.setItem ("addedtofav" , JSON.stringify(favarr) )
   
}

//////////////////////////////////////////////////////////////////////////////////////


function addToCart3(id3){
    let choosenItem3 = products3.find((item) =>item.id === id3 )

    cartnames.innerHTML += `<div class="selected"> <p class="choosen">${choosenItem3.title} </p> 
    <div>
    <span class="pieces">1</span> 
    <span class="positive">+</span> 
    <span class="nagative">-</span> 
    </div>
    </div>`
    let cartProductsLength = document.querySelectorAll(".cart-names p")
    addedItem = [...addedItem , choosenItem3]
    localStorage.setItem ("addedtocart" , JSON.stringify(addedItem) )
    number.style.display ="block"
    number.innerHTML = cartProductsLength.length
}

function addTofav3(id3){
    let favitem = products3.find((item) => item.id === id3)
    favarr = [...favarr , favitem]

    localStorage.setItem ("addedtofav" , JSON.stringify(favarr) )
    
}

////////////////////////////////////////////////////////////////////////////////////


var cart_products = document.querySelector(".cart-products")
var cart_shopping = document.querySelector(".cart-shopping")

cart_shopping.addEventListener("click" , function(){
    if(cartnames.innerHTML !=""){
        if(cart_products.style.display=="block"){
            cart_products.style.display="none"
        }else{
            cart_products.style.display="block"
        }
    }
})

///////////////////////////////////////////////////////////////////////////////


function search(){
    let searchbox=document.querySelector("#search").value.toUpperCase()
    let searchType = document.querySelector(".select").value; 
    let product=document.querySelectorAll(".product")

    product.forEach(product=>{
        let textsearch= ""
        if(searchType==="name"){
          textsearch = product.querySelector(".product-name").textContent.toUpperCase();
        }
        else if(searchType==="category"){
            textsearch = product.querySelector(".Category").textContent.toUpperCase().replace("category: ", "").trim();
        }
        if(textsearch.includes(searchbox)) {
            product.style.display = ""; 
        } else {
            product.style.display = "none";
        }
    });
   
}

