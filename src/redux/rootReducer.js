// import 

import { combineReducers } from "redux";
import toogleReducer from './reducer'
import  loginReducer  from "./reducers/loginReducer";
import userReducer from "./reducers/userReducer"
import roleReducer from "./reducers/roleReducers";
import snackbarReducer from "./reducers/snackbarReducer"
const rootReducer = combineReducers({
    toogle:toogleReducer,
    user:loginReducer,
    users: userReducer,
    role:roleReducer,
    snackbar:snackbarReducer
})

export default rootReducer;