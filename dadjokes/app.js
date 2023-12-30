const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')
const tai = document.querySelector('.tai')

const addJokes = async () => {
    const jokeText = await getJokes()
    const li = document.createElement("li")
    const h1 = document.createElement("h1")
    h1.innerText = "Kontol"
    li.append(jokeText)
    jokes.append(li)
    tai.append(h1)
}

button.addEventListener("click", addJokes)

const getJokes = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json',
            },
        }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke

    } catch (error) {
        return error.message
    }
}