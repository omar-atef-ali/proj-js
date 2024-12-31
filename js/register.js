var username = document.querySelector(".username")
var email = document.querySelector(".email")
var password = document.querySelector(".password")
var signupbtn = document.querySelector(".signupbtn")

signupbtn.addEventListener("click",function (e){
    e.preventDefault()
    if (username.value==="" || email.value==="" || password.value ===""){
        alert("please fill data")
    } else {
        localStorage.setItem("username" , username.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , password.value);  

        setTimeout ( () => {
            window.location = "login.html"
        } , 1000)
    }
})
