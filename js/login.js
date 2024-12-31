var username = document.querySelector(".username")
var password = document.querySelector(".password")
var loginbtn = document.querySelector(".loginbtn")

var getuser =localStorage.getItem("username")
var getpassword =localStorage.getItem("password")

loginbtn.addEventListener("click", function(e){
    e.preventDefault()
    if(username.value=="" || password.value==""){
        alert("please fill data")
    }else{
        if( (getuser && getuser.trim() ===username.value.trim() && getpassword === password.value)){
            setTimeout(() =>{
                window.location="index.html"
            },1000)

        }else{
            alert("username or password is wrong ")
        }
    }
})

