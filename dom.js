import { filtrar } from "./modules/filtrar.js";
import { getData } from "./modules/get.js";
import { addComic } from "./modules/post.js";
import { showCard } from "./modules/showCard.js";

let contenedor = document.getElementById('container')
let imagen = document.getElementById('imagen1')
let formulario = document.getElementById('form')
const productos = [
    {
        id: 1,
        nombre: 'Camisa',
        precio: 25
    },
    { id: 2, nombre: 'Pantalón', precio: 60 },
    { id: 3, nombre: 'Zapatos', precio: 80 },
    { id: 4, nombre: 'Bufanda', precio: 15 },
    { id: 5, nombre: 'Sombrero', precio: 50 },
    { id: 6, nombre: 'Medias', precio: 30 },
    { id: 7, nombre: 'Gorra', precio: 28 }
];
const serverUrl = 'http://localhost:3000/';
const BMARVEL = document.getElementById('marvel-btn');
const BDC = document.getElementById('dc-btn');

// document.addEventListener('DOMContentLoaded', () => {
//     let imageInput = prompt("Ingrese link de la imagen");
//     imagen.setAttribute('src', imageInput)


//     imagen.style.width = '15rem';

//     imagen.classList.remove('cover')
//     imagen.classList.add('cover-full')

//     let rate = document.createElement('img')
//     rate.setAttribute('src', 'https://static.vecteezy.com/system/resources/thumbnails/005/991/091/small/5-star-feedback-rate-us-service-satisfaction-rating-five-stars-vector.jpg')

//     contenedor.appendChild(rate);

//     contenedor.innerHTML += `
//         <img src=${imageInput} />
//     `
// })

// imagen.addEventListener('click', () => {
//     setTimeout(() => {
//         console.log('evento click');
//         window.location.href = '/pages/info.html'
//     }, 3000);
// })

document.addEventListener('DOMContentLoaded', () => {
    productos.forEach((item, index) => {
        // console.log(item, index);
        contenedor.innerHTML += `
            <div class="card" style="width: 18rem; margin: 1rem" id=${item.id}>
                <div class="card-body mx-auto">
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">${item.precio}</p>
                </div>
            </div>
        `
    })
})

// contenedor.addEventListener('click', () => {
//     console.log(localStorage.clear());  
// })

// try {
//     const objeto = {};
//     console.log(objeto.propiedad.inexistente);
// } catch (error) {
//     console.error('Ocurrió un error:', error.message);
// }

BMARVEL.addEventListener('click', async () => {
    const heroesData = await getData(`${serverUrl}marvel`);
    showCard(heroesData, contenedor, serverUrl)
})

BDC.addEventListener('click', async () => {
    const heroesData = await getData(`${serverUrl}dc`);
    showCard(heroesData, contenedor)
})

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let nombre = document.getElementById('input-nombre').value;
    let imagen = document.getElementById('input-imagen').value;
    let categoria = document.getElementById('input-categoria').value;
    let descripcion = document.getElementById('input-descripcion').value;
    let año = document.getElementById('input-año').value;

    const nuevaCarta = {
        id: crypto.randomUUID(),
        nombre,
        anio: año,
        historia: descripcion,
        imagen,
        categoria
    }

    addComic(serverUrl, nuevaCarta);
})