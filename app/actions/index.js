import {LOGIN, SET_USER_INFO, LOGOUT, AUTO_LOGIN} from './actionTypes';

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