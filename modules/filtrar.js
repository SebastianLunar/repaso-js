export const filtrar = (arr, valor, caja) => {
    const asequibles = arr.filter((item) => item.precio <= Number(valor))

    caja.innerHTML = ``

    asequibles.forEach((producto) => {
        caja.innerHTML += `
            <div class="card" style="width: 18rem; margin: 1rem" id=${producto.id}>
                <div class="card-body mx-auto">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text" id=${producto.id}>${producto.precio}</p>
                </div>
            </div>
        `
    })
}