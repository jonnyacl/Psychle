import axios from 'axios';
import jwt_decode from 'jwt-decode'
import { config } from '../config';
import { apify, apiPost, apiGet } from './apiRequest';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const setCurrentUser = (user) => ({
    type: SET_CURRENT_USER,
    user
  });

function getUser(jwt) {
    const u = {
        firstname: jwt.firstname,
        lastname: jwt.lastname,
        username: jwt.username,
        email: jwt.email,
        id: jwt.id
    }
    return u
}

export const register = userdata => dispatch => axios.post(apify('register'), userdata)
  .then(res => {
    const jwt = res.data.jwt;
    if (jwt) {
        const decodedJwt = jwt_decode(jwt)
        localStorage.setItem('mm-jwtToken', jwt);
        const u = getUser(decodedJwt)
        dispatch(setCurrentUser(u))
        setAuthToken(jwt);
        console.log(res)
    }
  }).catch(err => {
    console.log(err.response.data);
});

export const login = data => dispatch => axios.post(apify('login'), data, {'Accept': 'application/json'})
    .then(res => {
        const jwt = res.data.jwt
        if (jwt) {
            const decodedJwt = jwt_decode(jwt)
            localStorage.setItem('mm-jwtToken', jwt)
            setAuthToken(jwt)
            const u = getUser(decodedJwt)
            dispatch(setCurrentUser(u))
            console.log(res);
        }
});

export const logout = () => dispatch => {
    const jwt = localStorage.getItem('mm-jwtToken')
    const authHeader = {
        headers: {'Authorization' : `Bearer ${jwt}`}
    }
    localStorage.removeItem('mm-jwtToken')
    setAuthToken(false)
    dispatch(setCurrentUser({}))
    axios.post(apify('logout'), {}, authHeader)
        .then(res => console.log(res))
        .catch(err => console.log(err))
};

function handleErr (err) {
    if (err.status === 401 || err.status === 404) {
        localStorage.removeItem('mm-jwtToken')
        setAuthToken(false)
        return setCurrentUser({})
    }
}
function setAuthToken (token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export const checkAuth = () => dispatch => axios.get('/auth/check-auth')
    .catch(err => dispatch(handleErr(err)));