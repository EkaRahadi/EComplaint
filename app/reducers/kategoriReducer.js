import { SET_KATEGORI, RESET_KATEGORI } from '../actions/actionTypes'

const kategoriReducer =(state=[], action) => {
    switch(action.type) {
        case SET_KATEGORI:
            return [
                ...state,
                ...action.data
            ]
        case RESET_KATEGORI:
            return state = []
        default:
            return state;
    }
}

export default kategoriReducer;