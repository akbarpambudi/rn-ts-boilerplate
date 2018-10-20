import { AnyAction } from 'redux';
import { CHANGE_USERNAME, CHANGE_PASSWORD, CHANGE_CONFIRMATION_PASSWORD, NOTIFY_REGISTRATION_IN_PROGRESS, NOTIFY_REGISTRATION_SUCCESS, NOTIFY_REGISTRATION_FAILURE, RESET_STATE } from './action-type';

export enum RegistrationStatus {
    IN_PROGRESS,
    SUCCESS,
    FAILURE,
    PRISTINE
}


export enum ConfirmPasswordStatus {
    MATCH,
    NOT_MATCH,
    PRISTINE
}

export interface RegistrationState {
    username:string;
    password:string;
    status: RegistrationStatus,
    confirmPasswordStatus:ConfirmPasswordStatus,
    err:null
}

export interface Action{
    type:string;
    payload?:any
}

const initialState:RegistrationState = {
    username : "",
    password : "",
    status: RegistrationStatus.PRISTINE,
    confirmPasswordStatus:ConfirmPasswordStatus.PRISTINE,
    err:null 
}

export default (currentState:any = initialState,action:AnyAction)=>{
    const state = currentState as RegistrationState;
    switch(action.type){
        case CHANGE_USERNAME:
            return {...state, username:action.payload.username} as RegistrationState;
        case CHANGE_PASSWORD:
            return {...state,password:action.payload.password} as RegistrationState;
        case CHANGE_CONFIRMATION_PASSWORD:
            return {...state,confirmPasswordStatus:action.payload.confirmPassword == state.password ? ConfirmPasswordStatus.MATCH : ConfirmPasswordStatus.NOT_MATCH } as RegistrationState;
        case NOTIFY_REGISTRATION_IN_PROGRESS :
            return {...state,status : RegistrationStatus.IN_PROGRESS} as RegistrationState;
        case NOTIFY_REGISTRATION_SUCCESS :
            return {...state,status:RegistrationStatus.SUCCESS} as RegistrationState;
        case NOTIFY_REGISTRATION_FAILURE :
            return {...state,status:RegistrationStatus.FAILURE, err: action.payload.error} as RegistrationState;
        case RESET_STATE :
            return {...initialState};
        default :
            return state;
    }
}