import * as sequences from './sequences'
import * as providers from './providers'

export default {
    state: {
        posts: {
            data: [],
            loading: false,
            error: null,
        },
    },

    sequences,
    providers
}
