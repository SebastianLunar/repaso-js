export const editComic = async (url, data) => {
    let path = `${url}${data.categoria}/${data.id}`
    // http://localhost:3000/marvel/{id}

    try {
        await fetch(path, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(
            alert("Carta Modificada Exitosamente")
        )
    } catch (error) {
        return error
    }
}