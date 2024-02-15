export const filtrar = (...props) => {
    const asequibles = props[0].filter((item) => item.precio <= Number(props[1]))
    props[2].innerHTML = ``

    asequibles.forEach((producto) => {
        props[2].innerHTML += `
            <div class="card" style="width: 18rem; margin: 1rem" id=${producto.id}>
                <div class="card-body mx-auto">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text" id=${producto.id}>${producto.precio}</p>
                </div>
            </div>
        `
    })
}