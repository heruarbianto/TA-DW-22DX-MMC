const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY> 60)
});

let menu = document.querySelector('#hamburger');
let navbar = document.querySelector('.nav');
let isiDropDown = document.querySelector('.isi-dropdown');
let layanan = document.querySelector('#layanan');


menu.onclick = () =>{
    navbar.classList.toggle('open');
    isiDropDown.style.display = "block";
    layanan.style.display = "none";
};