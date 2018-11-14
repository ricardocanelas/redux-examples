import App, { sequences } from 'cerebral'
import store from './store'

const app = App(store)

app.on('flush', (changes) => {
    console.log('\n===============')
    console.log(changes)
})

const fetchPosts = app.get(sequences.fetchPosts)

fetchPosts()
