import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import postReducer from './reducers/postReducer'
import postSaga from './sagas/postSaga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
    posts: postReducer,
})

const store = createStore(reducers, applyMiddleware(sagaMiddleware))

// then run the saga
sagaMiddleware.run(postSaga)

store.subscribe(() => {
    console.log(JSON.stringify(store.getState(), null, 2))
})

// Fetch Posts
store.dispatch({ type: 'FETCH_POSTS_REQUEST' })
