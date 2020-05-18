import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import kategoriReducer from './kategoriReducer';
import adminReducer from './adminReducer';
import keluhanReducer from './keluhanReducer';
import keluhanPendingReducer from './keluhanPendingReducer';

const allReducer = combineReducers({
    userDetail: loginReducer,
    kategori: kategoriReducer,
    listAdmin: adminReducer,
    keluhanKategori: keluhanReducer,
    keluhanPending: keluhanPendingReducer

});

export default allReducer;