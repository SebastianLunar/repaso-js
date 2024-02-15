export const showCard = (arr, cont) => {
    cont.innerHTML = ``

    arr.forEach((item, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = "card";
        cardElement.style = "width: 18rem;"

        cardElement.innerHTML += `
            <img src=${item.imagen} class="card-img-top cover" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.nombre}</h5>
                <p class="card-text">${item.historia}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${item.anio}</li>
            </ul>
            <div class="card-body">
                <button class="btn btn-primary btn-edit">Editar</button>
                <button class="btn btn-danger btn-delete">Elimnar</button>
            </div>
        `

        const editButton = cardElement.querySelector('.btn-edit');
        const deleteButton = cardElement.querySelector('.btn-delete');

        editButton.addEventListener('click', () => {
            console.log("Botón Editar" + item.id)
        })

        deleteButton.addEventListener('click', () => {
            console.log("Botón Delete" + item.id)
        })

        cont.appendChild(cardElement);
    })
}