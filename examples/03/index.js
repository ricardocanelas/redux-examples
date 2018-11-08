import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { fetchPosts } from './actions/postActions'
import postReducer from './reducers/postReducer'

const reducers = combineReducers({
    posts: postReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

store.subscribe(() => {
    console.log(JSON.stringify(store.getState(), null, 2))
})

// Fetch Posts
store.dispatch(fetchPosts())
