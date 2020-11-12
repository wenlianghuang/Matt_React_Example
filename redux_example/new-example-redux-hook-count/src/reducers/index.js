import counter from './counter';
import currentUser from './currentUser';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    counter,
    currentUser,
})

export default rootReducer;