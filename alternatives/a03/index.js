import { createSpace, subscribe } from 'spaceace'
import actions from './actions'

const postSpace = createSpace({
    loading: true,
    error: null,
    data: [],
})

// Subscribe

subscribe(postSpace, ({ newSpace, oldSpace, causedBy }) => {
    console.log('\n==========================================')
    console.log(newSpace.toJSON())
    console.log('\nSpace updated by ', causedBy)
})

// Dispatch

postSpace(actions.addPost)({
    id: '001',
    title: 'A post',
})

postSpace(actions.updatePost)({
    id: '001',
    title: 'The post',
    updated_at: '2018-11-17 09:15:00',
})

postSpace(actions.removePost)({ id: '001' })
