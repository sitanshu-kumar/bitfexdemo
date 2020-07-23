import API from "../config/api";
//import qs from 'querystring';

import {

    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS
} from "../constants/action-types";

export const register = (user) => dispatch => {
    const body = JSON.stringify(user);
    console.log("SD: " + body)

    API.post("signup", body)
        .then(response => {
            console.log("Success");
        })
        .catch(error => {
            console.log("Error");
        })
        .then(function () {
            //console.log("Always Executed");
        });
};

// LOGIN
export const login = (user) => dispatch => {
    // Request body
    //const body = qs.stringify(user);
    const body = JSON.stringify(user);

    API.post("login", body)
        .then(response => {
            dispatch({
                type: response.data.success ? LOGIN_SUCCESS : LOGIN_FAIL,
                payload: response.data.success ? response.data : null
            });
        });
};

export const forgotPassword = (user) => dispatch => {
    // Request body

};

export const editProfile = (user) => dispatch => {
    // Request body

};

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT_SUCCESS
    });
};
