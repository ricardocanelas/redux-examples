const initialState = {
    loading: false,
    failure: false,
    data: [],
}

const postReducer = (state = initialState, action) => {
    console.log('\nAction:', action.type)

    switch (action.type) {
        case 'FETCH_POSTS_REQUEST':
            return {
                ...state,
                loading: true,
                failure: false,
            }
        case 'FETCH_POSTS_FAILURE':
            return {
                ...state,
                loading: false,
                failure: action.payload,
            }
        case 'FETCH_POSTS_SUCCESS':
            return {
                ...state,
                loading: false,
                failure: false,
                data: action.payload,
            }

        default:
            return state
    }
}

export default postReducer
