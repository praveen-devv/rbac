// import 

import { combineReducers } from "redux";
import toogleReducer from './reducer'
import  loginReducer  from "./reducers/loginReducer";
import userReducer from "./reducers/userReducer"
import roleReducer from "./reducers/roleReducers";
const rootReducer = combineReducers({
    toogle:toogleReducer,
    user:loginReducer,
    users: userReducer,
    role:roleReducer
})

export default rootReducer;