//Elementos del DOM
const contenedorTarjetas = document.getElementById("contenedor_tarjetas");
const contadorTarjetas = document.getElementById("conteo_tarjetas");
const totalTarjetas = document.getElementById("total_tarjetas");
const loader = document.getElementById("loader");

//Definición de constantes
const limiteTarjetas = 99;
const incrementoTarjetas = 9;
const conteoPagina = Math.ceil(limiteTarjetas / incrementoTarjetas);
let paginaActual = 1

totalTarjetas.innerHTML = limiteTarjetas;
  
var timerRegulador;
const regulador = (callback, tiempo) => {
  if (timerRegulador) return;

  timerRegulador = true;

  setTimeout(() => {
    callback();
    timerRegulador = false;
  }, tiempo);
};

//Crear una nueva tarjeta
const colorAleatorio = () => {
  const h = Math.floor(Math.random() * 360);
  return `hsl(${h}deg, 90%, 85%)`;
};

const crearTarjeta = (index) => {
  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta";
  tarjeta.innerHTML = index;
  tarjeta.style.backgroundColor = colorAleatorio();
  contenedorTarjetas.appendChild(tarjeta)
}

//Agregar tarjetas al contenedor y detectar cuando se llega al limite de tarjetas
const agregarTarjetas = (pageIndex) => {
  paginaActual = pageIndex;

  const comenzarRango = (pageIndex - 1) * incrementoTarjetas;
  const terminarRango = paginaActual == conteoPagina ? limiteTarjetas : pageIndex * incrementoTarjetas;

  contadorTarjetas.innerHTML = terminarRango

  for (let i = comenzarRango + 1; i <= terminarRango; i++){
    crearTarjeta(i);
  }
}



// Manejo de scroll inifinito
const manejarScrollInfinito = () => {
  regulador(() => {
  const finalPagina = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;

  if (finalPagina) {
    agregarTarjetas(paginaActual + 1);
  }

  if(paginaActual == conteoPagina) {
    quitarScrollInfinito;
  }
 },1000);
};

//Parar scroll inifinito
const quitarScrollInfinito = () => {
  loader.remove();
  window.removeEventListener("scroll", manejarScrollInfinito);
};

// Cargar tarjetas iniciales
window.onload = function() {
  agregarTarjetas(paginaActual);
}

window.addEventListener("scroll", manejarScrollInfinito);
