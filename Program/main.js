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
  document.querySelector("#modal_title").textContent = "Teknologi Hijau";
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
  document.querySelector("#modal_image").alt =
    "gambar jelajahi destinasi wisata";
  // menampilkan text paragraf
  document.querySelector("#modal_text").textContent =
    "Indonesia menawarkan destinasi ekowisata menakjubkan, seperti Pulau Menjangan di Bali dan Tanjung Ringgit di Lombok yang didedikasikan 90% untuk ekowisata. Taman Nasional Alas Purwo di Banyuwangi dan Taman Nasional Way Kambas di Lampung fokus pada pelestarian alam. Taman Nasional Tanjung Puting di Kalimantan Tengah menyuguhkan pengalaman unik melalui perjalanan sungai untuk melihat orangutan dilindungi.";
});
  //modal wiasata ramah lingkungan
  document.querySelector("#Read-More").addEventListener("click", () => {
  document.querySelector(".modal_layout").style.display = "flex";
  document.querySelector("#modal_image").src = "img/c.jpg";
  document.querySelector("#modal_image").alt =
    "gambar Budaya lokal dan konservasi alam";
  document.querySelector("#modal_text").textContent =
    "Budaya lokal dan konservasi alam Keseimbangan harmonis antara tradisi masyarakat dan pelestarian lingkungan. Nilai-nilai budaya mendukung gaya hidup berkelanjutan, sementara upaya konservasi melindungi keanekaragaman hayati. Bersama, keduanya membentuk fondasi untuk membangun masyarakat yang peduli pada lingkungan dan warisan budayanya..";
});
  //modal panel surya
  document.querySelector("#PanelSurya").addEventListener("click", () => {
  document.querySelector(".modal_layout").style.display = "flex";
  document.querySelector("#modal_image").src = "img/t1.jpg";
  document.querySelector("#modal_image").alt =
    "gambar panel surya";
  document.querySelector("#modal_text").textContent =
    "Solar panel adalah solusi energi terbarukan yang berkelanjutan dan ramah lingkungan. Dengan daya utama sinar matahari, maka dapat membantu mengurangi emisi gas rumah kaca. Panel surya dan lingkungan adalah perpaduan yang tepat untuk keberlanjutan bumi. Mari hubungi Kami untuk memiliki solar panel!";
});

//modal Motor Listrik
document.querySelector("#MotorListrik").addEventListener("click", () => {
  document.querySelector(".modal_layout").style.display = "flex";
  document.querySelector("#modal_image").src = "img/t2.jpg";
  document.querySelector("#modal_image").alt =
    "gambar Motor Listrik";
  document.querySelector("#modal_text").textContent =
    "Motor listrik adalah contoh dari teknologi energi bersih (clean energy technology). Clean energy technology adalah teknologi yang menghasilkan level gas rumah kaca yang sangat rendah atau mendekati nol jika dibandingkan dengan teknologi lainnya. Motor listrik menggunakan bahan bakar listrik. Salah satu cara memperoleh listrik itu sendiri adalah melalui pemanfaatan energi panas matahari yang diubah menjadi energi listrik dengan menggunakan panel surya. Tenaga surya merupakan salah satu sumber energi terbarukan yang masih tersedia dan tidak mungkin habis. Motor listrik tidak mengeluarkan suara bising yang memekakkan telinga, sehingga tidak ada polusi suara. Motor listrik juga tidak mencemari udara karena tidak mengeluarkan gas emisi yang dapat mencemari lingkungan.";
});

//modal Daur Ulang
document.querySelector("#DaurUlang").addEventListener("click", () => {
  document.querySelector(".modal_layout").style.display = "flex";
  document.querySelector("#modal_image").src = "img/t3.jpg";
  document.querySelector("#modal_image").alt =
    "gambar daur ulang";
  document.querySelector("#modal_text").textContent =
    "Pengkomposan merupakan suatu teknik pengolahan limbah padat yang mengandung bahan-bahan organik yang biodegradable (dapat diuraikan oleh mikroorganisme). Adapun prinsip dari proses pengomposan adalah menurunkan C/N bahan organik hingga sama atau hampir sama dengan nisbah C/N tanah. dengan demikian nitrogen dapat dilepas dan dapat dimanfaatkan oleh tanaman. Tujuan proses pengomposan ini yaitu merubah bahan organik yang menjadi limbah menjadi produk yang mudah dan aman untuk ditangan, disimpan, diaplikasikan ke lahan pertanian dengan aman tanpa menimbulkan efek negatif baik pada tanah maupun pada lingkungan pada lingkungan. Proses pengomposan dapat terjadi secara aerob (menggunakan oksigen) atau anaerob (tidak ada oksigen). Pada proses pengomposan dengan adanya oksigen (aerob) akan menghasilkan CO2, NH3, H2O dan panas, sedangkan pada proses pengomposan tanpa adanya oksigen (anaerob) akan menghasilkan produk akhir berupa (CH4), CO2, CH3, sejumlah gas dan asam organik.";
});

//modal Pertanian Organik
document.querySelector("#PertanianOrganik").addEventListener("click", () => {
  document.querySelector(".modal_layout").style.display = "flex";
  document.querySelector("#modal_image").src = "img/t4.jpg";
  document.querySelector("#modal_image").alt =
    "gambar pertanian organik";
  document.querySelector("#modal_text").textContent =
    "Pertanian organik adalah sistem produksi pertanian yang holistik dan terpadu yang mengoptimalkan kesehatan dan produktivitas agro-ekosistem secara alami, sehingga mampu menghasilkan pangan dan serat yang cukup, berkualitas, dan berkelanjutan. Simpelnya, Pertanian organik adalah sebuah sistem pertanian yang menggunakan bahan bahan alami tanpa bahan mengandung zat kimia. Ada Beberapa jenis tanaman Indonesia yang berpotensi untuk dikembangkan dengan teknik tersebut, diantaranya adalah tanaman padi, hortikultura yang meliputi tanaman sayur, buah, bunga, dan tanaman obat (contohnya: brokoli, kubis merah, jeruk, dll.), tanaman perkebunan (kopi, teh, kelapa, dll.), dan rempah-rempah.";
});