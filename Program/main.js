const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 60);
});

let menu = document.querySelector("#hamburger");
let navbar = document.querySelector(".nav");
let isiDropDown = document.querySelector(".isi-dropdown");
let layanan = document.querySelector("#layanan");

menu.onclick = () => {
  navbar.classList.toggle("open");
  isiDropDown.style.display = "block";
  layanan.style.display = "none";
};

  // pelajari lebih lanjut home di klik
  document.querySelector("#read-Home").addEventListener("click", () => {
  // tampilkan modal
  document.querySelector(".modal_layout").style.display = "flex";
  // tampilkan image 1
  document.querySelector("#modal_image").src = "img/a.jpg";
  document.querySelector("#modal_image").alt = "gambar seputar teknologi hijau";
  // tampilkan text paragraf
  document.querySelector("#modal_text").textContent =
    "coba text isi paragraf";
});
