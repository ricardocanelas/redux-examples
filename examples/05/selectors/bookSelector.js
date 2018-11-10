import { createSelector } from 'reselect'

const getFilterYear = (state) => state.filter.year
const getBooks = (state) => state.data

export const getBookByYear = createSelector(
    [getFilterYear, getBooks],
    (year, books) => {
        return books.filter(item => item.year === year)
    }
)
