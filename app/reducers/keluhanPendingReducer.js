import { SET_KELUHAN_STATUS_PENDING, DELETE_KELUHAN_STATUS_PENDING } from '../actions/actionTypes';
import { State } from 'react-native-gesture-handler';

const keluhanPendingReducer = (state=[], action) => {
    switch (action.type) {
        case SET_KELUHAN_STATUS_PENDING:
            return [
                ...action.data
            ]
        case DELETE_KELUHAN_STATUS_PENDING:
            return [
                ...state.filter((item, index) => item.id !== action.data.id) 
            ]
        default:
            return state
    }
}

export default keluhanPendingReducer;