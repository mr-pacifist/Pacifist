//filtarable buttons
const filterBtn = document.querySelectorAll(".all_btn button");
const filterableCards = document.querySelectorAll(".filtarable_card .card");


//filter card function define
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    //Iterate for each filterable cards
    filterableCards.forEach(card => {
     //add "hide" class to hide the card initially
     card.classList.add("hide");

     if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
        card.classList.remove("hide");
     }
    });

};

//click event listener to each filter button
filterBtn.forEach(button => button.addEventListener("click", filterCards));


