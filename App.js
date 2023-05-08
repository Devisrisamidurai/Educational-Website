burger = document.querySelector(".burger")
 navbar = document.querySelector(".nav-bar")
 navRight = document.querySelector(".nav-right")
 navLeft = document.querySelector(".nav-left")

burger.addEventListener("click",()=>{
    navRight.classList.toggle('v-resp');
    navLeft.classList.toggle('v-resp');
    navbar.classList.toggle('h-nav-resp');

});
