const button = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

button.addEventListener(`click`, ()=> {
   button.classList.toggle(`open`);
   nav.classList.toggle(`flex`);
   nav.classList.toggle(`hidden`);
})