import { autorun, reaction } from 'mobx'
import TodoStore from './stores/todoStore'

const store = new TodoStore()

// a function that observes the state

autorun(() => {
    console.log('\n============== autorun')
    console.log(JSON.stringify(store, null, 2))
    // read: https://mobx.js.org/best/react.html#common-pitfall-console-log
})

// A variation on autorun that gives more fine grained control
// on which observables will be tracked

reaction(
    () => store.data.map((todo) => todo.title),
    (titles) => console.log('\n============= reaction:', titles.join(', '))
)

store.fetchData()

setTimeout(() => {
    store.data[2].title = 'super' // <--- reaction
    store.data[2].done = true
}, 1000)
