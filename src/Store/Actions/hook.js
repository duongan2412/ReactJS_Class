import { SET_DISTRICTS, SET_PROVINCES } from "../Types/hook"
import axios from 'axios';

const setProvincesAction = () => {
    return async (dispatch) => {
        const result = await axios.get('https://613cb968270b96001798b246.mockapi.io/provinces');
        dispatch({
            type: SET_PROVINCES,
            payload: result.data
        })
    };
};


const setDistrictAction = () => {
    return async (dispatch) => {
        const result = await axios.get('https://613cb968270b96001798b246.mockapi.io/districts');
        dispatch({
            type: SET_DISTRICTS,
            payload: result.data
        })
    };
}

export { setProvincesAction, setDistrictAction }