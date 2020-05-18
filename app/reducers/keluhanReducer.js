import { SET_KELUHAN_HASIL_FETCH_BY_KATEGORI } from '../actions/actionTypes';

const keluhanReducer = (state=[], action) => {
    switch (action.type) {
        case SET_KELUHAN_HASIL_FETCH_BY_KATEGORI:
            return [
                ...action.data
            ]
    
        default:
            return state
    }
}

export default keluhanReducer;