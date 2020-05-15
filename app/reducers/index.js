import {combineReducers} from 'redux';
import loginReducer from './loginReducer';

const allReducer = combineReducers({
    userDetail: loginReducer,

});

export default allReducer;