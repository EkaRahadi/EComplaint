import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import kategoriReducer from './kategoriReducer';
import adminReducer from './adminReducer';

const allReducer = combineReducers({
    userDetail: loginReducer,
    kategori: kategoriReducer,
    listAdmin: adminReducer

});

export default allReducer;