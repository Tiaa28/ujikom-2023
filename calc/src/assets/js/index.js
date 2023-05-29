const nilai1 = document.getElementById("nilai1");
const nilai2 = document.getElementById("nilai2");
const operator = document.getElementById("operator");
const result = document.getElementById("hasil");

function tambah() {
  const one = Number.parseInt(nilai1.value);
  const two = Number.parseInt(nilai2.value);
  operator.innerHTML = "+";
  const hasil = one + two;
  result.innerHTML = hasil;
}
function kurang() {
  const one = Number.parseInt(nilai1.value);
  const two = Number.parseInt(nilai2.value);
  operator.innerHTML = "-";
  const hasil = one - two;
  result.innerHTML = hasil;
}
function kali() {
  const one = Number.parseInt(nilai1.value);
  const two = Number.parseInt(nilai2.value);
  operator.innerHTML = "*";
  const hasil = one * two;
  result.innerHTML = hasil;
}
function bagi() {
  const one = Number.parseInt(nilai1.value);
  const two = Number.parseInt(nilai2.value);
  operator.innerHTML = "/";
  const hasil = one / two;
  result.innerHTML = hasil;
}
