const form = document.querySelector('form')
const allInputs = document.querySelectorAll('input')

let body = {}

const changeBody = (e) => {
    body = { ...body, [e.target.name]: e.target.value }
}

allInputs.forEach((input) => {
    input.addEventListener('change', changeBody)
})

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    try {
        const res = await fetch('x-url', {
            method: "POST",
            body: JSON.stringify(body)
        })
    } catch (error) {

    }
})