export const deleteComic = async (url, data) => {
    let path = `${url}${data.categoria}/${data.id}`
    // http://localhost:3000/marvel/{id}

    try {
        await fetch(path, {
            method: "DELETE"
        }).then(
            alert("Carta Eliminada Exitosamente")
        )
    } catch (error) {
        return error
    }
}