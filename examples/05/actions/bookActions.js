export const filterByYear = (year) => {
    return {
        type: 'CHANGE_FILTER_YEAR',
        payload: year
    }
}
