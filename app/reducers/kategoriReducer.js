import { SET_KATEGORI } from '../actions/actionTypes'

const kategoriReducer =(state=[], action) => {
    switch(action.type) {
        case SET_KATEGORI:
            return [
                ...state,
                ...action.data
            ]
        default:
            return state;
    }
}

export default kategoriReducer;