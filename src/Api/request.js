import axios   from 'axios';
import * as Qs from "qs";

const soyoungConfig      = window.soyoung;
export const requestGet  = async (url, params) => {
    return await axios.get(soyoungConfig.baseApiPath + url, {
        params
    });
};
export const requestPost = async (url, data) => {
    return await axios.post(soyoungConfig.baseApiPath + url, Qs.stringify(data));
};

