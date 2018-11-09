import { call, put, takeEvery } from 'redux-saga/effects'
import API from '../api'

function* fetchPosts(action) {
    try {
        const result = yield call(API.getPosts)
        yield put({ type: 'FETCH_POSTS_SUCCESS', payload: result })
    } catch (e) {
        yield put({ type: 'FETCH_POSTS_FAILURE', payload: e.message })
    }
}

function* postSaga() {
    yield takeEvery('FETCH_POSTS_REQUEST', fetchPosts)
}

export default postSaga
