var BtnSignIn = document.querySelector("#sign-in");
var BtnSignUp = document.querySelector("#sign-up");
var body = document.querySelector("body");

BtnSignIn.addEventListener("click", function () {
    body.className = "sign-in-js";
});

BtnSignUp.addEventListener("click", function() {
    body.className = "sign-up-js";
});