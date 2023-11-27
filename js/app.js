/* 4- Crear una web con un reloj que muestre la siguiente información:
 **Jueves 29 de Octubre del 2015 (dia, numero, mes año)
 **hora, segundos, am o pm, ms
 */

/* ------------------------------------------variables globales------------------------------------------------------- */

// Obtener la fecha actual
const fechaActual = new Date();
const opcionesDeFormato = { year: 'numeric', month: 'long', day: 'numeric' };
const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opcionesDeFormato);



/* ---------------------------------------funciones ------------------------------------------------------------------ */

const fecha = () => {
  const fechaObtenida = document.getElementById("fecha")
  console.log(fechaObtenida)
}

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
/* --------------------------------------- logica extra --------------------------------------------------------------- */
