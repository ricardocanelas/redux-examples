import API from '../api'

export const fetchPosts = () => {
    return (dispatch, getState) => {
        // If you want, you can get the store
        // console.log(getState().posts.data)
        // https://github.com/reduxjs/redux-thunk#motivation

        dispatch({ type: 'FETCH_POSTS_REQUEST' }) // <---------- dispatch

        return API.getPosts()
            .then((result) => {
                dispatch({
                    type: 'FETCH_POSTS_SUCCESS', // <----------- dispatch
                    payload: result,
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
