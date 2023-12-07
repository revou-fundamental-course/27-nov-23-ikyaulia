function hitungLuas() {
  var alas = document.getElementById("alas").value;
  var tinggi = document.getElementById("tinggi").value;
  var hasil = 0.5 * alas * tinggi;
  document.getElementById("hasil-luas").innerHTML = "Luas Segitiga: " + hasil;
}
function resetLuas() {
  var alasInput = document.getElementById("alas");
  var tinggiInput = document.getElementById("tinggi");

  alasInput.value = "";
  tinggiInput.value = "";
  document.getElementById("hasil-luas").innerHTML = "";
}

function hitungKeliling() {
  var sisi1 = document.getElementById("sisi1").value;
  var sisi2 = document.getElementById("sisi2").value;
  var sisi3 = document.getElementById("sisi3").value;
  var hasil = parseFloat(sisi1) + parseFloat(sisi2) + parseFloat(sisi3);
  document.getElementById("hasil-keliling").innerHTML =
    "Keliling Segitiga: " + hasil;
}

function resetKeliling() {
  var sisi1Input = document.getElementById("sisi1");
  var sisi2Input = document.getElementById("sisi2");
  var sisi3Input = document.getElementById("sisi3");

  sisi1Input.value = "";
  sisi2Input.value = "";
  sisi3Input.value = "";
  document.getElementById("hasil-keliling").innerHTML = "";
}
