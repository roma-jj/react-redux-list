import { 
    LOAD_ITEMS_PROGRESS,
    LOAD_ITEMS_SUCCESS,
    LOAD_ITEMS_ERROR 
} from '../actions/actions';

export const isLoading = (state = false, action) => {
    const {type} = action;

    switch (type) {
        case LOAD_ITEMS_PROGRESS:
            return true;
        case LOAD_ITEMS_SUCCESS: 
        case LOAD_ITEMS_ERROR:
            return false;
        default: return state;
    }
}

export const list = (state = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case LOAD_ITEMS_SUCCESS: {
            const {item} = payload;
            return item;
        }
        case LOAD_ITEMS_PROGRESS:
        case LOAD_ITEMS_ERROR:
        default: return state;
    }
}
