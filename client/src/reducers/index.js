import auth from './auth';
import alert from './alert';
import { combineReducers } from "redux";
import property from './property';
import profile from './profile';

export default combineReducers({
    alert,
    auth,
    property,
    profile
})