// const api_url ="https://api.kanye.rest";
// // const api_url ="https://api.forismatic.com/api/1.0/?";
// // const api_url ="https://api.api-ninjas.com/v1/quotes";
// // const api_url ="https://goquotes-api.herokuapp.com/api/v1/random?count=1";


// async function getapi(url)
// {
//   const response = await fetch(url);
//   var data = await response.json();
//   console.log(data);
// }

// getapi(api_url);


// spread

let obj = {
    name: 'name',
    age: 10,
    lastName: 'lastName'
}

let obj2 = { ...obj, name: 'Arsen', hello: 'hi' }
obj.age = 55
// console.log(obj);
// console.log(obj2);



const arr = ['banana', 'strawberry']
const arr2 = [...arr]

// destructuring

const obj3 = { aa: 'aa', bb: 'bb', cc: 'cc' }

const { aa, bb } = obj3

const arr3 = ['banana', 'strawberry', 'watermelon']

const [banana, klubnik, dzmeruk] = ['banana', 'strawberry', 'watermelon']

// console.log(dzmeruk,'<--- dzmeruk');


//rest 

const obj4 = { aa: 'aa', bb: 'bb', cc: 'cc', dd: 'dd' }


const { cc, ...rest } = obj4

console.log(cc,'cc');
console.log(rest,'rest');