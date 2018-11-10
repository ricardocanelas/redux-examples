import { createStore, combineReducers } from 'redux'
import bookReducer from './reducers/bookReducer'
import { getBookByYear } from './selectors/bookSelector'
import { filterByYear } from './actions/bookActions'

const reducers = combineReducers({
    bookStore: bookReducer,
})

const store = createStore(reducers)

store.subscribe(() => {
    console.log('\n=====================================')

    // compute derived data
    const booksFiltered = getBookByYear(store.getState().bookStore)
    console.log(JSON.stringify(booksFiltered, null, 2))
})

store.dispatch(filterByYear(2013))

store.dispatch(filterByYear(2014))

store.dispatch({ type: 'CHANGE_FILTER_YEAR', payload: 2016 })

/*
 * Using with mapStateToProps :
 *
 * const mapStateToProps = (state) => {
 *  return {
 *    books: getBookByYear(state)
 *  }
 * }
 *
 */
