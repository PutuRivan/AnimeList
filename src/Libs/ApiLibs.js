export const getAnime = async (resource, querry) => {
    const response  = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${querry}`)
    const data = await response.json()
    return data
}

export const getNestedAnimeResponse = async(resource, objectProperty) => {
    const response = await getAnime(resource)
    return response.data.flatMap(item => item[objectProperty])
}

export const reproduce = (data, gap) => {
    const first = ~~(Math.random() * (data.length - gap) + 1)
    const last = first + gap

    const response = {
        data: data.slice(first, last)
    }

    return response
}