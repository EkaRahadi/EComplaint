import {LOGIN, SET_USER_INFO, LOGOUT, AUTO_LOGIN, 
    FETCH_KATEGORI, SET_KATEGORI, CREATE_ADMIN,
    FETCH_LIST_ADMIN, SET_LIST_ADMIN,
    UPDATE_PARTIAL_ADMIN, UPDATE_FULL_ADMIN, DELETE_ADMIN} from './actionTypes';

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