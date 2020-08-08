import * as types from '../actions/actionTypes';
import { put, takeLatest, call } from 'redux-saga/effects';
import API from './api';

function* fetchListKeluhanByKategoriOnSuperAdmin(action) {
    if (action.date === null) {
        try {
            const result = yield call(API.fetchData, `/complaint-kategori/${action.id}/`);
    
            if (result) {
                yield put({type: types.SET_KELUHAN_HASIL_FETCH_BY_KATEGORI, data: result.data})
                action.onSuccess(result.data)
            }
        } catch (errorCatch) {
            console.log(errorCatch)
            const err = {
                message: 'Error Server Connection',
                error: errorCatch,
                downloadDisable: true
            }
            action.onError(err)
        }
    }
    else {
        const data = {
            date: action.date
        }
        try {
            const result = yield call(API.postData, `/complaint-kategori/${action.id}/`, data);
            console.log(result);
    
            if (result) {
                yield put({type: types.SET_KELUHAN_HASIL_FETCH_BY_KATEGORI, data: result.data})
                action.onSuccess(result.data)
            }
        } catch (errorCatch) {
            const err = {
                message: 'Error Server Connection',
                error: errorCatch,
                downloadDisable: true
            }
            action.onError(err)
        }
    }
    
}

function* fetchListKeluhanStatusPending(action) {
    // let result;
    try {
        const id = 4 // ini adalah ID status pending di DB
        
        const result = yield call(API.fetchData, `/complaint-by-status/${id}/`);
        if (result) {
            // console.log(result);
            yield put({type: types.SET_KELUHAN_STATUS_PENDING, data: result.data})
            action.onSuccess(result.data)
        }

    } catch (errorCatch) {
        console.log(errorCatch);
        const err = {
            message: 'Error Server Connection',
            error: errorCatch
        }
        action.onError(err)
    }
}

function* updateStatusKeluhan(action) {
    try {
        const result = yield call(API.postData, `/complaint/`, action.data);

         if (result.success === true) {
             console.log(result);
            yield action.onSuccess(result.data)
            yield put({type: types.DELETE_KELUHAN_STATUS_PENDING, data: action.data})
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

function* fetchKeluhanKategoriStatusBlmDitanggapi(action) {
    if (action.jurusan !== null) {
        try {
            let result = [];
            const data = {
                jurusan: action.jurusan
            }
            const response = yield call(API.postData, `/complaint-kategori/${action.id}/`, data);
            response.data.map(item => {
                if(item.status.status === 'Belum Ditanggapi') {
                    result.push(item)
                }
            })
    
            if (result) {
                yield put({type: types.SAVE_KELUHAN_KATEGORI_AND_BELUM_DITANGGAPI, data: result})
                action.onSuccess(result)
            }
        } catch (errorCatch) {
            const err = {
                message: 'Error Server Connection',
                error: errorCatch
            }
            action.onError(err)
            console.log('Error Server Keluhan Saga', errorCatch)
        }
    } else {
        try {
            let result = [];
            const response = yield call(API.fetchData, `/complaint-kategori/${action.id}/`);
            response.data.map(item => {
                if(item.status.status === 'Belum Ditanggapi') {
                    result.push(item)
                }
            })
    
            if (result) {
                yield put({type: types.SAVE_KELUHAN_KATEGORI_AND_BELUM_DITANGGAPI, data: result})
                action.onSuccess(result)
            }
        } catch (errorCatch) {
            const err = {
                message: 'Error Server Connection',
                error: errorCatch
            }
            action.onError(err)
            console.log('Error Server Keluhan Saga', errorCatch)
        }
    }

}

function* tanggapanLaporkanKeluhan(action) {
    try {
        //let result;
        const result = yield call(API.postData, `/complaint/`, action.data);
        // yield fetch(`https://api.elbaayu.xyz/api-mobile/complaint/`, {
        //  method: 'POST',
        //  headers: {
        //      'Content-Type': 'application/json'
        //    },
        //    body: JSON.stringify(action.data)
        //  }).then(res => res.json())
        //  .then(data => {
        //      result = data
        //  })

         if (result.success === true) {
            yield action.onSuccess(result.data)
        } else {
            console.log(result);
            const err = {
                message: 'Tidak dapat mengupdate status/tanggapan keluhan',
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
        console.log('Error Update Status/Tanggapan Keluhan Saga', errorCatch)
    }
}

export function* watchKeluhan() {
    yield takeLatest(types.GET_KELUHAN_BY_KATEGORI_ON_SUPER_ADMIN, fetchListKeluhanByKategoriOnSuperAdmin)
    yield takeLatest(types.GET_KELUHAN_STATUS_PENDING, fetchListKeluhanStatusPending)
    yield takeLatest(types.UPDATE_STATUS_KELUHAN, updateStatusKeluhan)
    yield takeLatest(types.FETCH_KELUHAN_KATEGORI_AND_BELUM_DITANGGAPI, fetchKeluhanKategoriStatusBlmDitanggapi)
    yield takeLatest(types.TANGGAPAN_LAPORKAN_KELUHAN, tanggapanLaporkanKeluhan)
}
