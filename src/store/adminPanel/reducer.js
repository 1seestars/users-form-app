import { PUSH_VALUES_TO_STATE, REMOVE_ITEM, REMOVE_ALL_ITEMS } from './actions'

const initialState = localStorage['test-form-app'] ? JSON.parse(localStorage['test-form-app']) : { users: [] }

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case PUSH_VALUES_TO_STATE:
            return {
                ...state, users: [...state.users, {
                    ...action.payload, 
                    id: Date.now(),
                    registrationDate: `${new Date().getFullYear()}/${(new Date().getMonth() + 1) < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)}/${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()}:${new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds()}`
                }]
            }
        case REMOVE_ITEM:
            return {...state, users: state.users.filter(elem => elem.id !== action.payload)}
        case REMOVE_ALL_ITEMS:
            return {...state, users: []}
        default: return state
    }
}