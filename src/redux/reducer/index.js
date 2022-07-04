import { combineReducers } from 'redux'
import { authSignUpReducer } from './user.reducer';

export const rootReducer = combineReducers({
    user: authSignUpReducer,
})