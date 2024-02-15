export const addComic = async (url, data) => {
    let path = `${url}${data.categoria}`
    // http://localhost:3000/marvel
    
    try {
        await fetch(path, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(
            alert("Carta Agregada Exitosamente")
        )
    } catch (error) {
        return error
    }
}