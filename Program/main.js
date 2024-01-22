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
  document.querySelector("#modal_title").textContent = "Wisata Ramah Lingkungan";
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
  document.querySelector("#modal_title").textContent = "Budaya Lokal dan Konservasi Alam";
  document.querySelector("#modal_image").src = "img/c.jpg";
  document.querySelector("#modal_image").alt =
    "gambar Budaya lokal dan konservasi alam";
  document.querySelector("#modal_text").textContent =
    "Budaya lokal dan konservasi alam Keseimbangan harmonis antara tradisi masyarakat dan pelestarian lingkungan. Nilai-nilai budaya mendukung gaya hidup berkelanjutan, sementara upaya konservasi melindungi keanekaragaman hayati. Bersama, keduanya membentuk fondasi untuk membangun masyarakat yang peduli pada lingkungan dan warisan budayanya..";
});
  //modal panel surya
  document.querySelector("#PanelSurya").addEventListener("click", () => {
    document.querySelector("#modal_title").textContent = "Panel Surya";
  document.querySelector(".modal_layout").style.display = "flex";
  document.querySelector("#modal_image").src = "img/p1.jpg";
  document.querySelector("#modal_image").alt =
    "gambar panel surya";
  document.querySelector("#modal_text").textContent =
    "Solar panel, sebuah inovasi canggih dalam bidang energi terbarukan, membawa solusi berkelanjutan dan ramah lingkungan untuk memenuhi kebutuhan listrik. Dengan mengandalkan daya sinar matahari sebagai sumber utamanya, solar panel mampu memberikan kontribusi positif dalam mengurangi emisi gas rumah kaca, menyelaraskan langkah-langkah menuju gaya hidup yang lebih berkelanjutan. Kehadiran panel surya menjadi simbol keselarasan antara teknologi modern dan keberlanjutan lingkungan, membuka peluang bagi perubahan positif dalam pemanfaatan sumber daya alam. Seiring dengan perhatian terhadap isu-isu lingkungan, penggunaan panel surya dianggap sebagai langkah yang tepat untuk menjaga keseimbangan ekosistem bumi. Untuk mewujudkan visi keberlanjutan dan berkontribusi pada pelestarian lingkungan, kami mengundang Anda untuk menghubungi kami dan menjelajahi berbagai solusi solar panel yang dapat disesuaikan dengan kebutuhan energi Anda.";
});

//modal Motor Listrik
document.querySelector("#MotorListrik").addEventListener("click", () => {
  document.querySelector(".modal_layout").style.display = "flex";
  document.querySelector("#modal_title").textContent = "Motor Listrik";
  document.querySelector("#modal_image").src = "img/p2.jpg";
  document.querySelector("#modal_image").alt =
    "gambar Motor Listrik";
  document.querySelector("#modal_text").textContent =
    "Motor listrik adalah contoh dari teknologi energi bersih (clean energy technology). Clean energy technology adalah teknologi yang menghasilkan level gas rumah kaca yang sangat rendah atau mendekati nol jika dibandingkan dengan teknologi lainnya. Motor listrik menggunakan bahan bakar listrik. Salah satu cara memperoleh listrik itu sendiri adalah melalui pemanfaatan energi panas matahari yang diubah menjadi energi listrik dengan menggunakan panel surya. Tenaga surya merupakan salah satu sumber energi terbarukan yang masih tersedia dan tidak mungkin habis. Motor listrik tidak mengeluarkan suara bising yang memekakkan telinga, sehingga tidak ada polusi suara. Motor listrik juga tidak mencemari udara karena tidak mengeluarkan gas emisi yang dapat mencemari lingkungan.";
});

//modal Daur Ulang
document.querySelector("#DaurUlang").addEventListener("click", () => {
  document.querySelector(".modal_layout").style.display = "flex";
  document.querySelector("#modal_title").textContent = "Daur Ulang & Kompos";
  document.querySelector("#modal_image").src = "img/p3.jpg";
  document.querySelector("#modal_image").alt =
    "gambar daur ulang";
  document.querySelector("#modal_text").textContent =
    "Pengkomposan merupakan suatu teknik pengolahan limbah padat yang mengandung bahan-bahan organik yang biodegradable (dapat diuraikan oleh mikroorganisme). Adapun prinsip dari proses pengomposan adalah menurunkan C/N bahan organik hingga sama atau hampir sama dengan nisbah C/N tanah. dengan demikian nitrogen dapat dilepas dan dapat dimanfaatkan oleh tanaman. Tujuan proses pengomposan ini yaitu merubah bahan organik yang menjadi limbah menjadi produk yang mudah dan aman untuk ditangan, disimpan, diaplikasikan ke lahan pertanian dengan aman tanpa menimbulkan efek negatif baik pada tanah maupun pada lingkungan pada lingkungan. Proses pengomposan dapat terjadi secara aerob (menggunakan oksigen) atau anaerob (tidak ada oksigen). Pada proses pengomposan dengan adanya oksigen (aerob) akan menghasilkan CO2, NH3, H2O dan panas, sedangkan pada proses pengomposan tanpa adanya oksigen (anaerob) akan menghasilkan produk akhir berupa (CH4), CO2, CH3, sejumlah gas dan asam organik.";
});

//modal Pertanian Organik
document.querySelector("#PertanianOrganik").addEventListener("click", () => {
  document.querySelector(".modal_layout").style.display = "flex";
  document.querySelector("#modal_title").textContent = "Pertanian Organik";
  document.querySelector("#modal_image").src = "img/p4.jpg";
  document.querySelector("#modal_image").alt =
    "gambar pertanian organik";
  document.querySelector("#modal_text").textContent =
    "Pertanian organik adalah sistem produksi pertanian yang holistik dan terpadu yang mengoptimalkan kesehatan dan produktivitas agro-ekosistem secara alami, sehingga mampu menghasilkan pangan dan serat yang cukup, berkualitas, dan berkelanjutan. Simpelnya, Pertanian organik adalah sebuah sistem pertanian yang menggunakan bahan bahan alami tanpa bahan mengandung zat kimia. Ada Beberapa jenis tanaman Indonesia yang berpotensi untuk dikembangkan dengan teknik tersebut, diantaranya adalah tanaman padi, hortikultura yang meliputi tanaman sayur, buah, bunga, dan tanaman obat (contohnya: brokoli, kubis merah, jeruk, dll.), tanaman perkebunan (kopi, teh, kelapa, dll.), dan rempah-rempah.";
});

//modal Visi dan misi
document.querySelector("#VisiMisi").addEventListener("click", () => {
  document.querySelector(".modal_layout").style.display = "flex";
  document.querySelector("#modal_title").textContent = "Visi & Misi";
  document.querySelector("#modal_text").textContent =
    "Platform kami memiliki komitmen untuk menjadi pelopor utama dalam mengedukasi, mempromosikan, dan mendukung pengembangan teknologi hijau serta praktek ramah lingkungan. Visi kami adalah menciptakan dan menjadi bagian integral dari sebuah masa depan yang berkelanjutan, di mana teknologi hijau menjadi tulang punggung dalam mengatasi tantangan lingkungan global. Untuk merealisasikan visi ini, kami memiliki beberapa misi utama, yang mencakup menyediakan informasi terkini tentang inovasi dalam teknologi hijau, mendorong penerapan teknologi hijau dalam kehidupan sehari-hari guna mengurangi dampak lingkungan, mempromosikan destinasi wisata yang ramah lingkungan, dan memberikan platform edukatif kepada masyarakat untuk lebih memahami serta berkontribusi dalam menciptakan masa depan yang berkelanjutan.";
});


//modal Keuntungan
document.querySelector("#KeuntunganKeberlanjutan").addEventListener("click", () => {
  document.querySelector(".modal_layout").style.display = "flex";
  document.querySelector("#modal_title").textContent = "Keuntungan Keberlanjutan";
  document.querySelector("#modal_text").textContent =
    "Keberlanjutan menawarkan sejumlah keuntungan yang tak hanya memperkaya lingkungan, tetapi juga menciptakan dampak positif dalam berbagai aspek kehidupan kita. Salah satu keuntungan utama dari prinsip keberlanjutan adalah pemeliharaan sumber daya alam yang berkelanjutan, memastikan bahwa generasi mendatang juga dapat menikmati kekayaan bumi. Dalam konteks ekonomi, praktik-praktik berkelanjutan memberikan peluang baru dalam menciptakan lapangan pekerjaan dan mendorong pertumbuhan ekonomi yang seimbang. Selain itu, kesadaran akan keberlanjutan merangsang inovasi dan pengembangan teknologi ramah lingkungan, membuka pintu bagi solusi kreatif dalam mengatasi tantangan lingkungan. Di tingkat sosial, fokus pada keberlanjutan juga meningkatkan kesejahteraan masyarakat, menciptakan komunitas yang lebih kuat, dan mempromosikan tanggung jawab bersama terhadap kelestarian planet ini. Oleh karena itu, investasi dalam keberlanjutan bukan hanya investasi dalam masa depan bumi, tetapi juga investasi dalam kesejahteraan dan kelangsungan hidup kita sebagai masyarakat global.";
});