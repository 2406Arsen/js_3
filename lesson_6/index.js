// fetch , axios 
//XHRHttpRequest 

//HTTP methods ==> get, post, put , patch, delete, options ....
const URL = 'https://jsonplaceholder.typicode.com/todos'
const xhr = new XMLHttpRequest()

xhr.open("GET", URL)
xhr.onerror = (e) => {
    console.log(e, '*-*-*-*-*-*-*-');
}
xhr.send()

xhr.onload = () => {
    console.log(xhr.status);
    // document.write(JSON.parse(xhr.response).map(({ title }) => title));
};

