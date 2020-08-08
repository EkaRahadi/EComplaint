import * as types from '../actions/actionTypes';
import { put, takeLatest, call } from 'redux-saga/effects';
import API from './api';
function* login(action) {
    try {
        const data = {
            username: action.params.username,
            password: action.params.password
        }
        const result = yield call(API.postData, `/login/`, data);

        if (result.success === true) {
            yield put({type: types.SET_USER_INFO, data: result.data})
            yield action.onSuccess(result.data);
        }
        else {
            const err = {
                'message': 'Username / Password Salah',
                'response': result
            }
            yield action.onError(err)
        }
    } catch (error) {
        const err = {
            'message': 'Error Connection Server',
            'response': error
        }
        yield action.onError(err)
        console.log('Error Login Saga', error)
    }
}

function* logout(action) {
    //Api Call
    const data = {
        token: action.userId
    }
    const result = yield call(API.deleteData, `/token-delete/`, data);

        if (result.success == true) {
            yield put({type: types.SET_USER_INFO, data: {}});
            yield put({type: types.RESET_KATEGORI});
        }
        else {
            console.log('Gagal Hapus Token')
        }
}

function* autoLogin(action) {
    yield put({type: types.SET_USER_INFO, data: action.user_account})
}

export function* watchLogin() {
    yield takeLatest(types.LOGIN, login)
    yield takeLatest(types.LOGOUT, logout)
    yield takeLatest(types.AUTO_LOGIN, autoLogin)
}