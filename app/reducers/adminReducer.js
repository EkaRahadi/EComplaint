import { SET_LIST_ADMIN } from '../actions/actionTypes';

const adminReducer = (state=[], action) => {
    switch (action.type) {
        case SET_LIST_ADMIN:
            return [
                ...action.data
            ]
    
        default:
            return state;
    }
}

export default adminReducer;