import { createSelector } from 'reselect'

const getFilterYear = (state) => state.filter.year
const getPosts = (state) => state.data

export const getPostByYear = createSelector(
    [getFilterYear, getPosts],
    (year, posts) => {
        return posts.filter(item => item.year === year)
    }
)
