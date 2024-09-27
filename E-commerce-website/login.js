// JS for toggle Form
let loginForm = document.getElementById("LoginForm");

let regForm = document.getElementById("RegForm");

let indicator = document.getElementById("Indicator");

function register(){
	regForm.style.transform = "translateX(0px)"
	loginForm.style.transform = "translateX(0px)"
  indicator.style.transform = "translateX(100px)"
}

function login(){
	regForm.style.transform = "translateX(300px)"
	loginForm.style.transform = "translateX(300px)"
  indicator.style.transform = "translateX(0px)"
}