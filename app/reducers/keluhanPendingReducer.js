import { SET_KELUHAN_STATUS_PENDING } from '../actions/actionTypes';

const keluhanPendingReducer = (state=[], action) => {
    switch (action.type) {
        case SET_KELUHAN_STATUS_PENDING:
            return [
                ...action.data
            ]
    
        default:
            return state
    }
}

export default keluhanPendingReducer;