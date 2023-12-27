let numero = document.getElementById(resultado);

function sumarTurno() {
  numero++;
  const resultado = numero.toString();
  document.getElementById("numero-turno").innerHTML = resultado.padStart(
    2,
    "0"
  );
}

function restarTurno() {
  numero--;
  const resultado = numero.toString();
  document.getElementById("numero-turno").innerHTML = resultado.padStart(
    2,
    "0"
  );
}

function agregarTurno() {
  numero = document.getElementById("agregar-turno").value;
  const resultado = numero.toString();
  document.getElementById("numero-turno").innerHTML = resultado.padStart(
    2,
    "0"
  );
}

const botonMas = document.getElementById("mas");
const botonMenos = document.getElementById("menos");
const botonAgregar = document.getElementById("boton-agregar-turno");

botonMas.addEventListener("click", sumarTurno);
botonMenos.addEventListener("click", restarTurno);
botonAgregar.addEventListener("click", agregarTurno);
