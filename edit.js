import { getData } from "./modules/get.js";
import { editComic } from "./modules/patch.js";
import { showCard } from "./modules/showCard.js";

const contenedor = document.getElementById('container')
const formulario = document.getElementById('form');
const seleccionado = localStorage.getItem('idSeleccionado')
const serverUrl = 'http://localhost:3000/';

document.addEventListener('DOMContentLoaded', async () => {
    const cartaSeleccionada = await getData(`${serverUrl}marvel/${seleccionado}`);
    const arrCarta = [cartaSeleccionada]
    showCard(arrCarta, contenedor, serverUrl)
})

formulario.addEventListener("submit", async (e) => {
    const cartaSeleccionada = await getData(`${serverUrl}marvel/${seleccionado}`);

    e.preventDefault();
    let nombre = document.getElementById('input-nombre').value;
    let imagen = document.getElementById('input-imagen').value;
    let descripcion = document.getElementById('input-descripcion').value;
    let año = document.getElementById('input-año').value;

    const nuevaCarta = {
        id: seleccionado,
        nombre,
        anio: año,
        historia: descripcion,
        imagen,
        categoria: cartaSeleccionada.categoria
    }

    editComic(serverUrl, nuevaCarta);
})