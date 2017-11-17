import axios from 'axios';
import { config } from '../config';

export function apiPost(path, data) {
    const authHeader = {
        headers: {'Authorization' : `Bearer ${localStorage.getItem('mm-jwtToken')}`}
    }
    return axios.post(apify(path), data, authHeader);
}

export function apiGet(path) {
    const authHeader = {
        headers: {'Authorization' : localStorage.getItem('mm-jwtToken')}
    }
    return axios.get(apify(path), authHeader);

}

export function apify(path) {
    const newPath = config.api_root + ':' + config.api_port + '/' + path;
    return newPath;
}