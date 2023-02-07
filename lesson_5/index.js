// //JSON --> JavaScript Object Notation

// // JSON.parse()
// // JSON.stringify()

// const obj = {
//     name: "name",
//     age: 55,
//     cars: ['mercedes, bmw, audi'],
//     info: {
//         lastName: 'lastName',
//         degree: "bachelor"
//     }
// }

// // console.log(obj)

// Object.prototype.toString = function () {
//     return JSON.stringify(this)
// }
// const stringifiedObject = obj.toString()
// console.log(['hello', 5, true].toString())
// console.log(obj.toString())
// console.log(stringifiedObject)
// console.log(JSON.parse(stringifiedObject))


const userName = document.getElementById('userName')
const password = document.getElementById('password')

let obj = {
    userName: '',
    password: '',
}

const changeObjectValues = (e) => {
    obj = { ...obj, [e.target.id]: e.target.value }
    console.log(`${JSON.stringify(obj, null, 2)}`)
    console.log(obj)

}
userName.addEventListener('change', changeObjectValues)
password.addEventListener('change', changeObjectValues)
