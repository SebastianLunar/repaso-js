export const showCard = (arr, cont) => {
    cont.innerHTML = ``

    arr.forEach((item, index) => {
        // console.log(item, index);
        cont.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src=${item.imagen} class="card-img-top cover" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">${item.historia}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${item.anio}</li>
                    <li class="list-group-item">${item.equipo}</li>
                    <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
        `
    })
}