let addedtocart = localStorage.getItem("addedtocart")
var section = document.querySelector(".cart_section")
var item = JSON.parse(addedtocart)

if(addedtocart){

    
    drawcartproduct(item)
    updateTotalPrice(item)
}

function drawcartproduct(products){
    
    
    let y = products.map((item , index )=>{
        return `
        <div class="container_product">
        <div class="product " price="${item.price}">
                    <img src="${item.Image}" alt="">
                    <div style="width: 100%; height: 90px; font-size: 20px; padding-left: 15px; font-family: Georgia, 'Times New Roman', Times, serif;" class="description">
                        <p style="font-weight: bold; font-size: 17px;" class="product-name">product: ${item.title}</p>
                        <p style="margin-top: -10px; font-weight: bold; font-size: 17px; class="Category"">category:${item.category}</p>
                        <p style="margin-top: -10px; font-weight: bold; font-size: 17px;">price: $${item.price}</p>
                        <div class="content" style="display: flex; justify-content: space-evently;">
                        
                            <button type="button" class="btn-sm btn-danger addbtn" onClick="remove(${index})">remove</button>
                            <div>
                                        <span class="pieces">1</span> 
                                        <span class="positive" >+</span> 
                                        <span class="nagative">-</span> 
                                    </div>
                            
                        
                        </div>
                    </div>

        </div>
        </div>
        
       
            `
        
    
       

    }).join('');
    section.innerHTML = y
}


var totalprice = document.querySelector(".total-price")
var favlitter = document.querySelector(".fav-litter")

if(addedtocart){
    totalprice.style.display = "flex"
}




function updateTotalPrice(products) {
    var price = document.querySelector(".price"); 
    let totalprice = products.reduce((acc, currentItem) => acc + parseFloat(currentItem.price), 0); 
    price.textContent = `$${totalprice}`; 
}

function remove(index) {
    item.splice(index, 1); 
    localStorage.setItem("addedtocart", JSON.stringify(item));
    drawcartproduct(item); 

    updateTotalPrice(item)
}

////////////////////////////////////////////////////////////////////////

var addedtofav = localStorage.getItem("addedtofav")
var fav_item = JSON.parse(addedtofav)
var favlitter = document.querySelector(".fav-litter")
var fav_section = document.querySelector(".fav-section")

if(addedtofav){
    drawfavproduct(fav_item)
    favlitter.style.display = "block"
}

function drawfavproduct(products){
    let y = products.map((item , index) => {
        return`
        <div class="fav-item-div">
                    <div class="card mb-3 fav-card" style="max-width: 540px;  ">
                        <div class="row g-0 ">
                          <div class="col-md-4 ">
                            <img src="${item.Image}" class="img-fluid rounded-start fav-img" alt="...">
                          </div>
                          <div class="col-md-8">
                            <div class="card-body fav-content">
                                <p >product:${item.title}</p>
                                <p>category:${item.category}</p>
                                <p >price:$${item.price}</p>
                                <div class="content" style="display: flex; ">
                                    
                                    <button type="button" class="btn-sm btn-danger " onClick="removefromfav(${index})">remove</button>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
        
        
        
        
        
        
        
        `

    }).join('');

    fav_section.innerHTML = y

}


function removefromfav(index) {
    fav_item.splice(index, 1); 
    localStorage.setItem("addedtofav", JSON.stringify(fav_item)); 
    drawfavproduct(fav_item); 
}