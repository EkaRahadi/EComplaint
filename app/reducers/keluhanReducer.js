import { SET_KELUHAN_HASIL_FETCH_BY_KATEGORI, SAVE_KELUHAN_KATEGORI_AND_BELUM_DITANGGAPI } from '../actions/actionTypes';

const keluhanReducer = (state=[], action) => {
    switch (action.type) {
        case SET_KELUHAN_HASIL_FETCH_BY_KATEGORI:
            return [
                ...action.data
            ]
        
        case SAVE_KELUHAN_KATEGORI_AND_BELUM_DITANGGAPI:
            return [
                ...action.data
            ]
        default:
            return state
    }
}

export default keluhanReducer;