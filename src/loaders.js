import url from "./url";

//Index loader
export const indexLoader = async () => {
    const response = await fetch(url)
    const personalbests = await response.json()
    return personalbests
}

//Show loader
export const showLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(url + id)
    const personalbest = await response.json()
    return personalbest
}