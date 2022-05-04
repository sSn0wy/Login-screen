const BtnSignIn = document.querySelector("#sign-in");
const BtnSignUp = document.querySelector("#sign-up");
const body = document.querySelector("body");

BtnSignIn.addEventListener("click", function () {
    body.className = "sign-in-js";
});

BtnSignUp.addEventListener("click", function() {
    body.className = "sign-up-js";
});
