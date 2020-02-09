export const PUSH_VALUES_TO_STATE = 'PUSH_VALUES_TO_STATE'
export const ACCOUNT_SAVE_SUCCESS = 'ACCOUNT_SAVE_SUCCESS'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const REMOVE_ALL_ITEMS = 'REMOVE_ALL_ITEMS'

export const getValues = values => ({ type: PUSH_VALUES_TO_STATE, payload: values })
export const saveValues = () => ({ type: ACCOUNT_SAVE_SUCCESS })
export const removeItem = id => ({type: REMOVE_ITEM, payload: id})
export const removeAllItems = () => ({ type: REMOVE_ALL_ITEMS })