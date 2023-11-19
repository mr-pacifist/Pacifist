


const text = document.querySelector(".second_text");


const textLoad = () => {
    setTimeout(() => {
        text.textContent ="Web-developer";

    }, 0);
    setTimeout(() => {
        text.textContent ="Freelancer";

    }, 4000);
    setTimeout(() => {
        text.textContent ="Student";

    }, 8000);
}

textLoad();
setInterval(textLoad,12000);


