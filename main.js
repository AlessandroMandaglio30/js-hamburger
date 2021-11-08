// seleziono il menu
let openMenu = document.querySelector(".header-right > a");

// rendo il menu cliccabile
openMenu.addEventListener("click", function(){
    // seleziono il menu e gli aggiungo la classe active
    document.querySelector(".hamburger-menu").classList.add("active")
});

// seleziono la chiusura nel menu
let closeMenu = document.querySelector(".close");

// rendo la chiusura cliccabile
closeMenu.addEventListener("click", function(){
    // seleziono il menu e gli tolgo la classe active
    document.querySelector(".hamburger-menu").classList.remove("active")
});