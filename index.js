// let input = prompt("Ingrese un texto")

// let submittedInputs = []

// while (input != "Salir") {
//     submittedInputs.push(input);
//     console.log(input);
//     input = prompt("Ingrese un texto")
// }

// console.log(submittedInputs);


// const arrayM = [
//     ["mesa", 5, r],
//     [
//         'cama',
//         'nochero',
//         [ "almohada", "sábana", "cobijas" ]
//     ]
// ]

// console.log(arrayM[1][2][2])

// const miCasa = {
//     habitaciones: [
//         {
//             dueño: "Santiago",
//             area: 12,
//             colorido: "Blanco",
//             muebles: ["nochero", "cama", "escritorio"]
//         },
//         {
//             dueño: "Sebas",
//             area: 14,
//             colorido: "Negro",
//             muebles: ["nochero2", "cama2", "escritorio2"]
//         },
//         {
//             dueño: "Padres",
//             area: 10,
//             colorido: "Gris",
//             muebles: ["nochero3", "cama3", "escritorio3"]
//         }
//     ],
//     sala: [
//         "muebles", "comedor", "mesita", "televisor", "materas"
//     ],
// }

// Sebas movió el televisor a la cama3
// console.log(miCasa.habitaciones[1].dueño)

// function actualizarTallas(nuevoValor) {
//     estudiante.uniforme.talla = nuevoValor  
// }

// estudiante.uniforme.talla = nuevoValor

// delete estudiante.uniforme.talla

// Create
// Read
// Update
// Delete

// console.log(estudiante.uniforme.talla)

const numeros = [1, 2, 3, 4, 5, 7, 8, 9, 10];

//1. forEach: Iterar o dar vueltas sobre el arreglo

numeros.forEach((elemento) => {
    console.log(elemento);
})

//2. some: Verifica si por lo menos UN SOLO ELEMENTO cumple determinada condición.
const mayoresQueTres = numeros.some((elemento) => elemento > 3)
console.log(mayoresQueTres)

//3. find: Buscar el primer elemento que cumpla cierta condición
const mayorATres = numeros.find((elemento) => elemento > 3)
console.log(mayorATres)

//4. filter: Filtrar elementos que cumplan una condición o premisa
const mayoresATres = numeros.filter((elemento) => elemento > 3)
console.log(mayoresATres)

//5. map: Transforma cada elemento de un arreglo
const propinas = numeros.map((elemento) => elemento*1000)
console.log(propinas);

//6. push: Agrega al final
//7. unshift: Agrega al inicio
//8. shift: Elimina al inicio
//9. pop: Elimina al final

numeros.pop();
console.log(numeros)

//10. splice: Modifica un elemento particualr de un arreglo
numeros.splice(5, 1, 6)
console.log(numeros)


