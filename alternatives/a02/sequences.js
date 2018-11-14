import { set } from 'cerebral/factories'
import { state, props } from 'cerebral'
import * as actions from './actions'

export const fetchPosts = [set(state.posts.loading, true), actions.getPosts, set(state.posts.data, props.result)]
