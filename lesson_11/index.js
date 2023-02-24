// import { allPostsUrl, postUrl } from './index2.mjs'

const BASE_URL = 'https://jsonplaceholder.typicode.com'
const post = '/posts'

const api = axios.create({
    baseURL: BASE_URL
})


const getQuoteBtn = document.querySelector('#getQuote')
const createPostBtn = document.querySelector('#createPost')
const getAllPostsBtn = document.querySelector('#getAllPostsBtn')

const url = "https://api.kanye.rest/";

const getQuotes = async () => {
    try {
        const res = await axios.get(url)
        console.log(res.data.quote);
    } catch (error) {

    }

}
getQuoteBtn.addEventListener('click', getQuotes)


const postBody = {
    title: 'foo',
    body: 'bar',
    userId: 1,
}

const postHeaders = {
    'Content-type': 'application/json; charset=UTF-8',
}
const postConfig = {
    method: 'POST',
    body: JSON.stringify(postBody),
    headers: postHeaders
}

const createPost = async () => {
    try {
        const { data } = await api.post(post, postBody, {
            headers: postHeaders
        })
        console.log(data);
    } catch (error) {
        const h2 = document.createElement('h2')
        h2.innerText = error.message
        document.body.appendChild(h2)
    }
}
createPostBtn.addEventListener('click', createPost)


const getAllPosts = async () => {
    try {
        const { data: posts } = await api.get(post)
        console.log(posts, 'all posts');
    } catch (error) {
        const p = document.createElement('p')
        p.innerText = error.message
        document.body.appendChild(p)
    }

}

getAllPostsBtn.addEventListener('click', getAllPosts)