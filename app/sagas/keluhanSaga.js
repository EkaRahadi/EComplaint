import * as types from '../actions/actionTypes';
import { put, takeLatest, call } from 'redux-saga/effects';

function* fetchListKeluhanByKategoriOnSuperAdmin(action) {
    try {
        let result;
        yield fetch(`https://backend-complaint.herokuapp.com/api-mobile/complaint-kategori/${action.id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            result = data
        })

        if (result) {
            yield put({type: types.SET_KELUHAN_HASIL_FETCH_BY_KATEGORI, data: result.data})
            action.onSuccess(result.data)
        }
    } catch (errorCatch) {
        const err = {
            message: 'Error Server Connection',
            error: errorCatch
        }
        action.onError(err)
    }
}

function* fetchListKeluhanStatusPending(action) {
    try {
        let result;
        const id = 4 // ini adalah ID status pending di DB
        yield fetch(`https://backend-complaint.herokuapp.com/api-mobile/complaint-by-status/${id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            result = data
        })

        if (result) {
            yield put({type: types.SET_KELUHAN_STATUS_PENDING, data: result.data})
            action.onSuccess(result.data)
        }
    } catch (errorCatch) {
        const err = {
            message: 'Error Server Connection',
            error: errorCatch
        }
        action.onError(err)
    }
}

function* updateStatusKeluhan(action) {
    try {
        let result;
        yield fetch(`https://backend-complaint.herokuapp.com/api-mobile/complaint/`, {
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
                message: 'Tidak dapat mengupdate status keluhan',
                error: result
            }
            yield action.onError(err)
        }

    } catch (errorCatch) {
        const err = {
            message: 'Error Connection Server',
            response: errorCatch
        }
        yield action.onError(err)
        console.log('Error Update Status Keluhan Saga', errorCatch)
    }
}

export function* watchKeluhan() {
    yield takeLatest(types.GET_KELUHAN_BY_KATEGORI_ON_SUPER_ADMIN, fetchListKeluhanByKategoriOnSuperAdmin)
    yield takeLatest(types.GET_KELUHAN_STATUS_PENDING, fetchListKeluhanStatusPending)
    yield takeLatest(types.UPDATE_STATUS_KELUHAN, updateStatusKeluhan)
}
