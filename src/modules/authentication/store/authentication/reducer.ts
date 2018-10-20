import { CHANGE_USERNAME, CHANGE_PASSWORD, NOTIFY_LOGIN_FAILURE, NOTIFY_LOGIN_SUCCESS, NOTIFY_LOGIN_IN_PROGRESS, NOTIFY_LOGIN_PRISTINE } from './action-type';
import { AnyAction } from 'redux';

export enum LoginStatus {
    IN_PROGRESS,
    SUCCESS,
    FAILURE,
    PRISTINE
}
export interface AuthenticationState {
    username:string;
    password:string;
    status: LoginStatus,
    user:null,
    err:null
}

export interface Action{
    type:string;
    payload?:any
}

const initialState:AuthenticationState = {
    username : "",
    password : "",
    status: LoginStatus.PRISTINE,
    user:null,
    err:null 
}

export default (currentState:any = initialState,action:AnyAction)=>{
    switch(action.type){
        case CHANGE_PASSWORD : 
            return {...currentState,password:action.payload.password}
        case CHANGE_USERNAME :
            return {...currentState,username:action.payload.username}
        case NOTIFY_LOGIN_IN_PROGRESS :
            return {...currentState,status:LoginStatus.IN_PROGRESS}
        case NOTIFY_LOGIN_SUCCESS :
            return {...currentState,status:LoginStatus.SUCCESS,user:action.payload.user}
        case NOTIFY_LOGIN_FAILURE :
            return {...currentState,status:LoginStatus.FAILURE,err:action.payload.err}
        case NOTIFY_LOGIN_PRISTINE :
            return {...currentState,status:LoginStatus.PRISTINE,err:null}
        default:
            return currentState;
    }
}