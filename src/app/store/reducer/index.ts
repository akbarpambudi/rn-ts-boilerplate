import { combineReducers } from "redux";
import { navReducer } from './../../navigation/navigation-redux';
import authenticationReducer from './../../../modules/authentication/store/authentication/reducer';
import registrationReducer from './../../../modules/authentication/store/registration/reducer'

export default combineReducers({nav:navReducer,authentication:authenticationReducer,registration:registrationReducer});