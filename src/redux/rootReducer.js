import { adminReduce } from "./adminReducer/adminReduce";
import { userReduce } from "./userReducer/userReduce";

const { combineReducers } = require('redux');

const rootReducer = combineReducers({
    users: userReduce,
    adminData:adminReduce,
});

export default rootReducer;