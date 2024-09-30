const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
function mostrarMes(){
  const mesEnPosicionSeis = meses[7];
  document.getElementById("mes").textContent = 'El mes en la posición es: ' + mesEnPosicionSeis;
}