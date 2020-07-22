import * as types from '../actions/actionTypes';
import { put, takeLatest, call } from 'redux-saga/effects';

function* login(action) {
    try {
        let result;
           yield fetch(`https://api.elbaayu.xyz/api-mobile/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  'username': action.params.username,
                  'password': action.params.password
              })
            }).then(res => res.json())
            .then(data => {
                result = data
            })

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
    let result;
    yield fetch(`https://api.elbaayu.xyz/api-mobile/token-delete/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            'token': action.userId
            })
        }).then(res => res.json())
        .then(data => {
            result = data
        })

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