import * as types from '../actions/actionTypes';
import { put, takeLatest, call } from 'redux-saga/effects';


function* fetchKategori(action) {
    try {
        let result;
           yield fetch('https://backend-complaint.herokuapp.com/api-mobile/kategori/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
              }
            }).then(res => res.json())
            .then(data => {
                result = data
            })
        //PUT
        if(result.success === true) {
            yield put({type: types.SET_KATEGORI, data: result.data})
            action.onSuccess()
        }
        else {
            const err = {
                message: 'Kategori tidak ditemukan',
                error: result
            }
            action.onError(err)
        }
    } catch (error) {
        const err = {
            message: 'Error Connection Server',
            error: error
        }
        action.onError(err)
    }
}

export function* watchKategori() {
    yield takeLatest(types.FETCH_KATEGORI, fetchKategori)
}