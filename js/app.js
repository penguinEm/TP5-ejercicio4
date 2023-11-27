/* 4- Crear una web con un reloj que muestre la siguiente información:
 **Jueves 29 de Octubre del 2015 (dia, numero, mes año)
 **horas, minutos, segundos, am o pm,
 */



// Obtener la fecha actual


const fechaActual = new Date();
const opcionesDeFormato = { weekday:"long", year: "numeric", month: "long", day: "numeric" };
const fechaFormateada = fechaActual.toLocaleDateString("es-ES", opcionesDeFormato).toUpperCase();
/* ---------------------------------------funciones ------------------------------------------------------------------ */

const fecha = () => {
  const fechaObtenida = document.getElementById("fecha");
  fechaObtenida.innerHTML = fechaFormateada;
  fechaObtenida.className = "display-4 gradiente";
};
const reloj = () => {
  const reloj = document.getElementsByClassName("reloj")[0];
  const fechaActual = new Date();
  let horas = fechaActual.getHours();
  if (horas < 10) {
    horas = `0${horas}`;
  }

  let minutos = fechaActual.getMinutes();
  if (minutos < 10) {
    minutos = `0${minutos}`;
  }

  let segundos = fechaActual.getSeconds();
  if (segundos < 10) {
    segundos = `0${segundos}`;
  }

  let sistemaHorario = "";
  if (horas >= 12) {
    sistemaHorario = "PM";
  } else {
    sistemaHorario = "AM";
  }

  reloj.innerHTML = `${horas} : ${minutos} : ${segundos} ${sistemaHorario}`;
};

reloj();
setInterval(reloj, 1000);

fecha();
setInterval(fecha, 86400000);
