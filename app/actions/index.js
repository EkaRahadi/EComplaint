import {LOGIN, SET_USER_INFO, LOGOUT, AUTO_LOGIN, 
    FETCH_KATEGORI, SET_KATEGORI, CREATE_ADMIN,
    FETCH_LIST_ADMIN, SET_LIST_ADMIN,
    UPDATE_PARTIAL_ADMIN, UPDATE_FULL_ADMIN, 
    DELETE_ADMIN, GET_KELUHAN_BY_KATEGORI_ON_SUPER_ADMIN,
    GET_KELUHAN_STATUS_PENDING, UPDATE_STATUS_KELUHAN,
    FETCH_KELUHAN_KATEGORI_AND_BELUM_DITANGGAPI,
    TANGGAPAN_LAPORKAN_KELUHAN} from './actionTypes';

export const login = (params, onSuccess, onError) => {
    return {
        type : LOGIN,
        params,
        onSuccess,
        onError
    }
}

export const setUserInfo = (data) => {
    return {
        type: SET_USER_INFO,
        data
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const autoLogin = (user_account) => {
    return {
        type: AUTO_LOGIN,
        user_account
    }
}

export const fetchKategori = (onSuccess, onError) => {
    return {
        type: FETCH_KATEGORI,
        onSuccess,
        onError
    }
}

export const setKategori = (data) => {
    return {
        type: SET_KATEGORI,
        data
    }
}

export const createAdmin = (data, onSuccess, onError) => {
    return {
        type: CREATE_ADMIN,
        data,
        onSuccess,
        onError
    }
}

export const fetchListAdmin = (onSuccess, onError) => {
    return {
        type: FETCH_LIST_ADMIN,
        onSuccess,
        onError
    }
}

export const setListAdmin = (data) => {
    return {
        type: SET_LIST_ADMIN,
        data
    }
}

export const updatePartialAdmin = (data, id, onSuccess, onError) => {
    return {
        type: UPDATE_PARTIAL_ADMIN,
        data,
        id,
        onSuccess,
        onError
    }
}

export const updateFullAdmin = (data, id, onSuccess, onError) => {
    return {
        type: UPDATE_FULL_ADMIN,
        data,
        id,
        onSuccess,
        onError
    }
}

export const deleteAdmin = (id, onSuccess, onError) => {
    return {
        type: DELETE_ADMIN,
        id,
        onSuccess,
        onError
    }
}

export const fetchKeluhanKategoriOnSuperAdmin = (id, onSuccess, onError) => {
    return {
        type: GET_KELUHAN_BY_KATEGORI_ON_SUPER_ADMIN,
        id,
        onSuccess,
        onError
    }
}

export const fetchKeluhanStatusPending = (onSuccess, onError) => {
    return {
        type: GET_KELUHAN_STATUS_PENDING,
        onSuccess,
        onError
    }
}

export const updateKeluhanStatus = (data, onSuccess, onError) => {
    return {
        type: UPDATE_STATUS_KELUHAN,
        data,
        onSuccess,
        onError
    }
}

export const fetchKeluhanKategoriStatusBlmDitanggapi = (id, onSuccess, onError) => {
    return {
        type: FETCH_KELUHAN_KATEGORI_AND_BELUM_DITANGGAPI,
        id,
        onSuccess,
        onError
    }
}

export const tanggapanLaporkanKeluhan = (data, onSuccess, onError) => {
    return {
        type: TANGGAPAN_LAPORKAN_KELUHAN,
        data,
        onSuccess,
        onError
    }
}