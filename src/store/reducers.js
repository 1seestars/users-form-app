import { combineReducers } from 'redux';
import { reducer } from './adminPanel/reducer';
import { reducer as formReducer } from 'redux-form'
import { ACCOUNT_SAVE_SUCCESS } from './adminPanel/actions'

export const rootReducer = combineReducers({
  addUserPage: reducer,
  form: formReducer.plugin({
    addNewUser: (state, action) => {
      switch(action.type) {
        case ACCOUNT_SAVE_SUCCESS:
          return undefined;
        default:
          return state;
      }
    }
  })
})