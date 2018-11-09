import axios from 'axios'

const getPosts = () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => [response.data[0], response.data[1]])
        .catch((err) => {
            throw err
        })
}

export default {
    getPosts,
}
