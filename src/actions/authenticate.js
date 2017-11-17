import axios from 'axios';
import jwtDecode from 'jwt-decode'
import { config } from '../config';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const setCurrentUser = (user) => ({
    type: SET_CURRENT_USER,
    user
  });

export const register = userdata => dispatch => axios.post(apify('register'), userdata)
  .then(res => {
    const jwt = res.data.jwt;
    localStorage.setItem('mm-jwtToken', jwt);
    const u = {
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        email: res.data.email
    }
    dispatch(setCurrentUser(u))
    setAuthToken(jwt);
    console.log(res)
});

function apify(path) {
    const newPath = config.api_root + ':' + config.api_port + '/' + path;
    return newPath;
}

export const login = data => dispatch => axios.post(apify('login'), data, {'Accept': 'application/json'})
    .then(res => {
        const jwt = res.data.jwt
        localStorage.setItem('mm-jwtToken', jwt)
        setAuthToken(jwt)
        const u = {
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            email: res.data.email
        }
        dispatch(setCurrentUser(u))
        console.log(res);
});

export const logout = () => dispatch => {
    const jwt = localStorage.getItem('mm-jwtToken')
    localStorage.removeItem('mm-jwtToken')
    setAuthToken(false)
    dispatch(setCurrentUser({}))
    dispatch(axios.post(apify('logout'), jwt, {'Accept': 'application/json'}))
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