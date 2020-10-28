import { loadItemsError, loadItemsProgress, loadItemsSuccess } from "../actions/actions";
import axios from 'axios';
import { token } from '../token';

export const loadItems = () => async (dispatch, getState) => {
    try {
        dispatch(loadItemsProgress());
        const response = await axios.get(
            `https://cloud.iexapis.com/stable/stock/aapl/intraday-prices?chartLast=30&token=${token}`
        );
        const list = await response.data;
        
        dispatch(loadItemsSuccess(list));

    } catch (e) {
        dispatch(loadItemsError());
        dispatch(displayAlert(e));
    }
}

export const displayAlert = item => () => {
    alert(`${item}`);
}