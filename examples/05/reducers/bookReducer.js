const initialState = {
    data: [
        { id: '001', name: 'Book-A-Year-2016', year: 2016 },
        { id: '002', name: 'Book-W-Year-2017', year: 2017 },
        { id: '003', name: 'Book-E-Year-2016', year: 2016 },
        { id: '004', name: 'Book-S-Year-2013', year: 2013 },
        { id: '005', name: 'Book-O-Year-2016', year: 2016 },
        { id: '006', name: 'Book-M-Year-2012', year: 2012 },
        { id: '007', name: 'Book-E-Year-1980', year: 1980 },
    ],
    filter: {
        year: 2016
    },
    store_name: 'Mega Book Store',
    store_address: '5th Ave, New York, NY',
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_FILTER_YEAR':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    year: action.payload
                }
            }

        default:
            return state
    }
}

export default bookReducer
