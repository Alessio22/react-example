import axios from 'axios';

const api = {
    login(email, password) {
        return axios.post('https://jsonplaceholder.typicode.com/posts', { email, password })
    },
    fetchPosts() {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
    },
    fetchPost(id) {
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    }
}

export default api