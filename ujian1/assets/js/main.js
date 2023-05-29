const btn = document.getElementById("submit");
const blok = document.querySelector(".block");
let i = 0;

btn.addEventListener("click", () => {
  i++;
  if (i == 1) {
    alert("Yang Anda  Masukkan Salah");
  } else if (i == 2) {
    alert("Yang Anda Masukkan Salah");
  } else if (i == 3) {
    alert("Anda Telah Diblokir");
    btn.classList.add("hidden");
    blok.classList.remove("hidden");
  }
});
