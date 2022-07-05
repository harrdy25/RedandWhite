import { combineReducers } from 'redux'
import { authSignUpReducer } from './user.reducer';
import { ProductReducer } from './product.reducer';

export const rootReducer = combineReducers({
    user: authSignUpReducer,
    Product: ProductReducer,
})