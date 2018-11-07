import { createStore, combineReducers } from 'redux'
import { addBook, updateBook, destroyBook } from './actions/bookActions'
import bookReducer from './reducers/bookReducer'

const reducers = combineReducers({
    bookStore: bookReducer,
})

const store = createStore(reducers)

store.subscribe(() => {
    console.log('\n=====================================')
    console.log(JSON.stringify(store.getState(), null, 2))
})

// Add a book
store.dispatch(
    addBook({
        id: 203,
        name: 'Learning JavaScript',
        year: 2012,
        price: 20.99,
    })
)

// Add a book
store.dispatch(
    addBook({
        id: 204,
        name: 'Learning React',
        year: 2015,
        price: 49.3,
    })
)

// Update a book
store.dispatch(
    updateBook(203, {
        name: 'Learning React (new Edition)',
        year: 2018,
    })
)

// Destroy a book
store.dispatch(destroyBook(204))

console.log('')
console.log(store.getState().bookStore.data[0].name) // Learning React (new Edition)
console.log(store.getState().bookStore.data[1]) // undefined
