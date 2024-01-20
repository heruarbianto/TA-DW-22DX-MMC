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
      "Selamat datang di Teknologi Hijau, tempat di mana inovasi bertemu keberlanjutan. Kami adalah pionir dalam membawa solusi terkini untuk mewujudkan masa depan yang berkelanjutan. Dengan fokus pada energi terbarukan, transportasi ramah lingkungan, dan pengolahan limbah, kami berkomitmen untuk mengurangi dampak lingkungan dan menciptakan dunia yang lebih baik.";
  });
  
  document.querySelector("#modal_close_icon").addEventListener("click", () => {
    // tutup modal
    document.querySelector(".modal_layout").style.display = "none";
  });
  
  // tutup modal di sembarang area
  window.addEventListener("click", (e) => {
  if (e.target == document.querySelector(".modal_layout")) {
    document.querySelector(".modal_layout").style.display = "none";
  }
  });


  // ketika button jelajahi destinasi di klik
  document.querySelector("#Jelahai-Destinasi").addEventListener("click", () => {
  // menampilkan modal
  document.querySelector(".modal_layout").style.display = "flex";
  // menampilkan images b
  document.querySelector("#modal_image").src = "img/b.jpg";
  document.querySelector("#modal_image").alt = "gambar jelajahi destinasi wisata";
  // menampilkan text paragraf
  document.querySelector("#modal_text").textContent =
   "Indonesia menawarkan destinasi ekowisata menakjubkan, seperti Pulau Menjangan di Bali dan Tanjung Ringgit di Lombok yang didedikasikan 90% untuk ekowisata. Taman Nasional Alas Purwo di Banyuwangi dan Taman Nasional Way Kambas di Lampung fokus pada pelestarian alam. Taman Nasional Tanjung Puting di Kalimantan Tengah menyuguhkan pengalaman unik melalui perjalanan sungai untuk melihat orangutan dilindungi.";
  });
    
  //menambahkan event listener pada ikon penutup modal
  document.querySelector("#modal_close_icon").addEventListener("click", () => {  
  //menutup modal dengan mengubah properti tata letak CSS
  document.querySelector(".modal_layout").style.display = "none";
  });

  // menutup modal di area bebas yang di klik
  window.addEventListener("click", (e) => {
  if (e.target == document.querySelector(".modal_layout")) {
    document.querySelector(".modal_layout").style.display = "none";
      }
  });