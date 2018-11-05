import { authConstant } from './Auth.constant';
import { uiStopLoading, uiStartLoading } from '../actions/ui.action';

let url = 'http://192.168.1.4:8000/api/v1.0/core/login/'

export const signUp = (values) => {
    return dispatch => {
        dispatch(uiStartLoading)
        fetch('http://18.223.218.199:8000/api/v1.0/core/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then(res => res.json())
            .then(json => {
                console.log('json--------', json);
                dispatch(uiStopLoading());

                if (!json.token) {
                    console.log('error', json);
                    alert("Authentication failed, please try again");
                }
                else {
                    dispatch(authStoreToken(json.token));
                    dispatch(signUpSuccess(json));
                }
            })
            .catch(err => {
                console.log('err-------', err)
                dispatch(uiStopLoading());
                dispatch(signUpFailure(err));
                alert("Authentication failed, please try again");
            });
    }
}

export const signUpSuccess = (user) => {
    return {
        type: authConstant.SIGNUP_USER_SUCCESS,
        user: user
    }
}

export const signUpFailure = (error) => {
    return {
        type: authConstant.SIGNUP_USER_FAILURE,
        error: { error }
    };
}

export const login = (values) => {
    return dispatch => {
        dispatch(uiStartLoading)
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        })
            .then(res => res.json())
            .then(json => {
                console.log('json--------', json);
                dispatch(uiStopLoading());

                if (!json.token) {
                    console.log('error', json);
                    alert("Authentication failed, please try again");
                } else {
                    dispatch(authStoreToken(json.token));
                }
                
            })
            .catch(err => {
                console.log('err-------', err)
                dispatch(uiStopLoading());

                alert("Authentication failed, please try again");
            })
    }
}

export const authStoreToken = token => {
    return dispatch => {
        dispatch(authSetToken(token));
        localStorage.setItem('token', token);
    }
}

export const authSetToken = token => {
    return {
        type: authConstant.AUTH_SET_TOKEN,
        token: token
    }
}
