const initialState = {
    data: [],
    store_name: 'Mega Book Store',
    store_address: '5th Ave, New York, NY',
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return {
                ...state,
                data: [...state.data, action.payload],
            }

        case 'UPDATE_BOOK':
            return {
                ...state,
                data: state.data.map((book) => {
                    if (book.id === action.payload.id) {
                        return {
                            ...book,
                            ...action.payload.content,
                        }
                    }
                    return book
                }),
            }

        case 'DESTROY_BOOK':
            return {
                ...state,
                data: state.data.filter((book) => book.id != action.payload),
            }

        default:
            return state
    }
}

export default bookReducer
