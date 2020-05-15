import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import kategoriReducer from './kategoriReducer';

const allReducer = combineReducers({
    userDetail: loginReducer,
    kategori: kategoriReducer

});

export default allReducer;