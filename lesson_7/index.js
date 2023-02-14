// const requestURL = 'https://jsonplaceholder.typicode.com/users'

// function sendRequest(method, url, body = null) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()

//         xhr.open(method, url)

//         xhr.responseType = 'json'
//         xhr.setRequestHeader('Content-Type', 'application/json')

//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response)
//             } else {
//                 resolve(xhr.response)
//             }
//         }

//         xhr.onerror = () => {
//             reject(xhr.response)
//         }

//         xhr.send(JSON.stringify(body))
//     })
// }

// sendRequest('GET', requestURL)
//     .then(console.log)
//     .catch(console.log)

// const body = {
//     name: 'Arsen',
//     age: 23
// }

// sendRequest('POST', requestURL, body)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))



const requestURL = 'https://jsonplaceholder.typicode.com/users'

async function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json',
        'Content-Language': 'ru'
    }


    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        
        if (response.ok) {
            return response.json()
        }

        return response.json().then(error => {
            const e = new Error('Something went wrong')
            e.data = error
            throw e
        })
    })
}

    // sendRequest('GET', requestURL)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))

const body = {
    name: 'Arsen',
    age: 23
}

sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))