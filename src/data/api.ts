import app from "./app"

const base = 'https://opentdb.com/'

export async function getQuestions() {
    let url = `${base}api.php?type=multiple`

    const params = {
        ...app.input
    }

    /**
     * Basic validation
     */
    if (params.category > 0) {
        url += `&category=${params.category}`
    }

    if (params.difficulty) {
        if (['easy', 'medium', 'hard'].includes(params.difficulty)) {
            url += `&difficulty=${params.difficulty}`
        }
    }

    if (Math.floor(params.amount) > 0) {
        url += `&amount=${Math.floor(params.amount)}`
    } else {
        url += `&amount=10`
    }

    try {
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error(`HTTP Error Response: ${res.status} ${res.statusText}`)
        }
        return await res.json()
    } catch (e) {
        console.log(e)
        app.interface.setError()
    }
}

export async function getCategories() {

    let url = `${base}api_category.php`

    try {
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error(`HTTP Error Response: ${res.status} ${res.statusText}`)
        }
        return await res.json()
    } catch (e) {
        console.error(e)
        app.interface.setError()
    }
}