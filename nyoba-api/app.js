// XMLHttpRequest
// const req = new XMLHttpRequest

// let data

// req.onload = function () {
//     data = JSON.parse(this.responseText)
//     document.getElementById("name").innerText = "My name is " + data.name
// }

// req.onerror = function () {
//     return this
// }
// req.open('GET', 'https://swapi.dev/api/people/1')
// req.send()
// XMLHttpRequest


// Fetch
// fetch('https://swapi.dev/api/people/1')
//     .then((res) => {
//         if (!res.ok) {
//             throw Error('gabisa')
//         }
//         return res.json()
//     })
//     .then((data) => {
//         console.log('json', data)
//     })
//     .catch((err) => {
//         console.log("ERrror ya", err)
//     })
// Fetch

// Fetch Async Await
// const loadPeople = async () => {
//     try {
//         const res = await fetch('https://swapi.dev/api/people/1')
//         const data = await res.json()
//         document.getElementById("name1").innerText = "My name is " + data.name
//         const res2 = await fetch('https://swapi.dev/api/people/2')
//         const data2 = await res2.json()
//         document.getElementById("name2").innerText = "My name is " + data2.name
//     }
//     catch (err) {
//         console.log("ini error ya", err)
//     }
// }

// loadPeople()
// Fetch Async Await

// axios.get('https://swapi.dev/api/people/41238')
//     .then((res) => {
//         console.log(res.data.name)
//     })
//     .catch((err) => {
//         console.log(err.message)
//     })

const getPeople = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`)
        console.log(res.data)
    } catch (error) {
        console.log(error.message)
    }
}