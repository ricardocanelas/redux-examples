import axios from 'axios'

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_POSTS_REQUEST' }) // <---------- dispatch

        return axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                dispatch({
                    type: 'FETCH_POSTS_SUCCESS', // <----------- dispatch
                    payload: [response.data[0], response.data[1], response.data[2]],
                })
            })
            .catch((err) => {
                dispatch({
                    type: 'FETCH_POSTS_FAILURE', // <---------- dispatch
                    payload: err.message,
                })
            })
    }
}
