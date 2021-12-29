// import 

import { combineReducers } from "redux";
import toogleReducer from './reducer'
import  loginReducer  from "./reducers/loginReducer";
import roleReducer from "./reducers/roleReducers";
const rootReducer = combineReducers({
    toogle:toogleReducer,
    user:loginReducer,
    role:roleReducer
})

export default rootReducer;