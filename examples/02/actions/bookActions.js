import { ADD_BOOK, UPDATE_BOOK, DESTROY_BOOK } from '../constants/actionTypes'

export const addBook = (book) => {
    return {
        type: ADD_BOOK,
        payload: book,
    }
}

export const updateBook = (id, content) => {
    return {
        type: UPDATE_BOOK,
        payload: {
            id: id,
            content: content,
        },
    }
}

export const destroyBook = (id) => {
    return {
        type: DESTROY_BOOK,
        payload: id,
    }
}
