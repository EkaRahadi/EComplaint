import * as types from '../actions/actionTypes';
import { put, takeLatest, call } from 'redux-saga/effects';
import API from './api';

function* fetchKategori(action) {
    try {
        const result = yield call(API.fetchData, `/kategori/`);

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
        console.log(error)
    }
}

export function* watchKategori() {
    yield takeLatest(types.FETCH_KATEGORI, fetchKategori)
}