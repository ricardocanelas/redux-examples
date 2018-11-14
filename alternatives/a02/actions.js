import { state } from 'cerebral/factories'

export const getPosts = ({ api }) =>
    api.getPosts().then(result => ({ result }))
