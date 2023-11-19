const formOpenBtn = document.querySelector("#form_open"),
home = document.querySelector(".home"),
formcontainer = document.querySelector(".form_container"),
fromcloseBtn = document.querySelector(".from_close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHideBtn = document.querySelectorAll(".pw_hide");


formOpenBtn.addEventListener("click", () => home.classList.add("show"));
fromcloseBtn.addEventListener("click", () => home.classList.remove("show"));

//password icon show hide 
pwShowHideBtn.forEach(icon => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if(getPwInput.type=== "password"){
        getPwInput.type = "text";
        icon.classList.replace("fa-eye-slash", "fa-eye");
    }else{
        getPwInput.type = "password";
        icon.classList.replace("fa-eye", "fa-eye-slash");
    }
    });
});

//active or deactive form
signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formcontainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formcontainer.classList.remove("active");
});








