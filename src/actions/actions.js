export const LOAD_ITEMS_PROGRESS = 'LOAD_ITEMS_PROGRESS';
export const loadItemsProgress = () => ({
    type: LOAD_ITEMS_PROGRESS
})

export const LOAD_ITEMS_SUCCESS = 'LOAD_ITEMS_SUCCESS';
export const loadItemsSuccess = item => ({
    type: LOAD_ITEMS_SUCCESS,
    payload: {item}
})

export const LOAD_ITEMS_ERROR = 'LOAD_ITEMS_ERROR';
export const loadItemsError = () => ({
    type: LOAD_ITEMS_ERROR
})