var formSignIn = document.getElementById("signIn");
var formSignUp = document.getElementById("signUp");
var btnColor = document.getElementsByClassName("btnColor")[0];

function irLogin(){
    formSignIn.style.left = "25px";
    formSignUp.style.left = "450px";
    btnColor.style.left = "0px";
}

function irRegistar(){
    formSignIn.style.left = "-450px";
    formSignUp.style.left = "25px";
    btnColor.style.left = "110px";
}