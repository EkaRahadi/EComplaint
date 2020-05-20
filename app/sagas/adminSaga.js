import * as types from '../actions/actionTypes';
import { put, takeLatest, call } from 'redux-saga/effects';

function* createAdmin(action) {
    try {
        fetch(`https://api.elbaayu.xyz/api-mobile/admin/`, {
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

function* fetchListAdmin(action) {
    try {
        let result;
        yield fetch(`https://api.elbaayu.xyz/api-mobile/admin/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            result = data
        })

        //
        if (result) {
            yield put({type: types.SET_LIST_ADMIN, data: result.data})
            action.onSuccess(result.data)
        }
    } catch (errorCath) {
        const err = {
            message: 'Error Server Connection',
            error: errorCath
        }
        action.onError(err)
    }
}

function* updatePartialAdmin(action) {
    try {
        let result;
           yield fetch(`https://api.elbaayu.xyz/api-mobile/token-partial-update/${action.id}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(action.data)
            }).then(res => res.json())
            .then(data => {
                result = data
            })

        if (result.success === true) {
            yield action.onSuccess(result.data)
        } else {
            const err = {
                message: 'Tidak dapat mengupdate admin',
                error: result
            }
            yield action.onError(err)
        }
    } catch (error) {
        const err = {
            message: 'Error Connection Server',
            response: error
        }
        yield action.onError(err)
        console.log('Error Update Partial Admin Saga', error)
    }
    console.log('Partial')
}

function* updateFullAdmin(action) {
    try {
        let result;
           yield fetch(`https://api.elbaayu.xyz/api-mobile/admin/${action.id}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(action.data)
            }).then(res => res.json())
            .then(data => {
                result = data
            })

        if (result.success === true) {
            yield action.onSuccess(result.data)
        } else {
            const err = {
                message: 'Tidak dapat mengupdate admin',
                error: result
            }
            yield action.onError(err)
        }
    } catch (error) {
        const err = {
            message: 'Error Connection Server',
            response: error
        }
        yield action.onError(err)
        console.log('Error Update Partial Admin Saga', error)
    }
    console.log('Full')
}

function* deleteAdmin(action) {
    try {
        let result;
           yield fetch(`https://api.elbaayu.xyz/api-mobile/admin/${action.id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
              }
            }).then(res => res.json())
            .then(data => {
                result = data
            })

        if (result.success === true) {
            yield action.onSuccess(result.data)
        } else {
            const err = {
                message: 'Tidak dapat menghapus admin',
                error: result
            }
            yield action.onError(err)
        }
    } catch (error) {
        
    }
    console.log('Delete Admin', action.id)
}

export function* watchAdmin() {
    yield takeLatest(types.CREATE_ADMIN, createAdmin)
    yield takeLatest(types.FETCH_LIST_ADMIN, fetchListAdmin),
    yield takeLatest(types.UPDATE_PARTIAL_ADMIN, updatePartialAdmin),
    yield takeLatest(types.UPDATE_FULL_ADMIN, updateFullAdmin),
    yield takeLatest(types.DELETE_ADMIN, deleteAdmin)
}