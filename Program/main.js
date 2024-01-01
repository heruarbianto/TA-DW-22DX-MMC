const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY> 60)
});

let menu = document.querySelector('#hamburger');
let navbar = document.querySelector('.nav');

menu.onclick = () =>{
    navbar.classList.toggle('open');

};