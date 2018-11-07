import { createStore } from 'redux'

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

let store = createStore(counter)

store.subscribe(() => {
    console.log('\n=====================================')
    console.log(JSON.stringify(store.getState(), null, 2))
})

store.dispatch({ type: 'INCREMENT' }) // will be 1
store.dispatch({ type: 'INCREMENT' }) // will be 2
store.dispatch({ type: 'DECREMENT' }) // will be 1
