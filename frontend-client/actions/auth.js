import axios from 'axios';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';

import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL
} from './types';


export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};

export const registerAgency = ({ name, email, password, tradeLicenseNo, yearOfEstablishment }) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    const body = JSON.stringify({ name, email, password, tradeLicenseNo, yearOfEstablishment });

    try {
        const res = await axios.post(`http://localhost:5000/api/users/regAgency`, body, config);
        console.log(res);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            console.log(errors);
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: REGISTER_FAIL
        })
    }
};

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/api/auth', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: LOGIN_FAIL
        })
    }
};