var welcome = document.querySelector(".name") 
var user = document.querySelector(".span-name")
var infoul = document.querySelector(".info-ul")
var infoul2 = document.querySelector(".info-ul2")
if(localStorage.getItem("username")){
    infoul.remove()
    welcome.style.display = "block"
    infoul2.style.display = "flex"


    user.innerHTML = localStorage.getItem("username")

}

var logoutbtn = document.querySelector(".logout")


logoutbtn.addEventListener("click" , function(e){
     e.preventDefault()
    localStorage.clear()
    
    window.location ="login.html"
    
    
    
})