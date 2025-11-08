const swalst = Swal.mixin({
  allowOutsideClick: false,
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
});

// LANGSUNG JALAN TANPA INPUT NAMA
let nama = "Kamu";

async function mulaiUcapan() {

  await swalst.fire({
    title: 'eciieee ' + 'adaa yg' + ' uda ultah yaaaayy 🎉🎉',
    imageUrl: 'images/cat-meng.gif',
    imageWidth: 200,
    imageHeight: 180,
  });

  await swalst.fire({
    title: 'barakallah fii umrik yaaaaa 🥳',
    imageUrl: 'images/happpycat.gif',
    imageWidth: 120,
    imageHeight: 120,
  });

  await swalst.fire({
    title: 'semoga panjang umur, sehat selalu, dan bahagiaa selalua 🌸',
    imageUrl: 'images/cat-kiss.gif',
    imageWidth: 120,
    imageHeight: 120,
  });

  await swalst.fire({
    title: 'maaf yaa kalo akuu gbisa disanaan nemenin ulang tahun kamuuu🥲',
    imageUrl: 'images/ssss.gif',
    imageWidth: 120,
    imageHeight: 120,
  });

  // UCAPAN RAPI
  document.getElementById("text").innerHTML = "Celamatt ulangg tauuun " + "riniii" + " ❤️";

  document.getElementById("text2").innerHTML = 
    "harii ini hari spesial kamuu, akuu ikut seneng karena aku pernaa dan masii punya ksmpatan kenal sama kamuu...." +
    "makasii yaa nii, karena dulu kamu pernah dateng, nemenin, dan jadi orng yg bikin akuu kuat di masa-masa yang beraaatt.." +
    "makasii jgaaa karena kamuu perna milih akuu dan pernah sayang sama akuu dngn cara yang nggak semua orang bisa lakuin..." +
    "bnyak bnget hal baik tentang kamuu yng susa dirangkum pake kata-kata..." +
    "yg jelass, akuu beruntung bnget perna jadi seseorang yg kamu izinin masuk ke hidup kamuu, aku bersyukur kita masih deket.."+
    "aku doain semoga rezeki kamuu lancar, kamuu selalu sehat, dan hati kamuu selalu dikasih ketenangan...."+
    "semoga di sisa tahun ini bawa banyak hal baik ke kamuu, kebahagiaan yang tulus, dan alasan buat kamuu senyum setiap hari..."+
    "makasii karena pernah jadi bagian penting di hidup akuu… dan semoga kamu tetap ada di hidupku, dengan cara yang terbaik, kapan pun itu..."+
    "selamat ulang tahun. semoga hari kamuu penuh hal-hal indah.❤️";

  document.getElementById("Content").style.display = "block";

  // CONTROL MUSIK
  const music = document.getElementById("bgMusic");
  const playBtn = document.getElementById("playMusic");

  playBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      playBtn.textContent = "⏸ Jeda Musik";
    } else {
      music.pause();
      playBtn.textContent = "▶ Putar Musik";
    }
  });
}

// START
window.onload = mulaiUcapan;
