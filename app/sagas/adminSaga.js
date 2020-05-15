import * as types from '../actions/actionTypes';
import { put, takeLatest, call } from 'redux-saga/effects';

function* createAdmin(action) {
    try {
        fetch('https://backend-complaint.herokuapp.com/api-mobile/admin/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(action.data)
        }).then(res => res.json())
        .then(result => {
            console.log(result)
            if(result.success === true) {
                action.onSuccess(result.data)
            }
            else {
                const err = {
                    message: 'Gagal membuat admin',
                    error: result
                }
                action.onError(err)
            }
        })
    } catch (errorCath) {
        const err = {
            message: 'Error Connection Server',
            error: errorCath
        }
        action.onError(err)
    }
}

export function* watchAdmin() {
    yield takeLatest(types.CREATE_ADMIN, createAdmin)
}