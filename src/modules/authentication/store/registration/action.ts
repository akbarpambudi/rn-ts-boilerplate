import { RESET_STATE, CHANGE_USERNAME, CHANGE_PASSWORD, CHANGE_CONFIRMATION_PASSWORD, NOTIFY_REGISTRATION_SUCCESS, NOTIFY_REGISTRATION_FAILURE, NOTIFY_REGISTRATION_IN_PROGRESS } from "./action-type";
import { Dispatch } from "redux";
import { auth } from './../../../common/lib/firebase-mock';

export const resetState = ()=>({
    type:RESET_STATE
})

export const changeUsername = (username:string)=>({
    type: CHANGE_USERNAME,
    payload:{username}
})

export const changePassword = (password:string)=>({
    type: CHANGE_PASSWORD,
    payload:{password}
})


export const notifyRegisterSuccess = ()=>({
    type: NOTIFY_REGISTRATION_SUCCESS,
})


export const notifyRegisterInProgress = ()=>({
    type: NOTIFY_REGISTRATION_IN_PROGRESS,
})

export const notifyRegisterFailure = (error:Error)=>({
    type: NOTIFY_REGISTRATION_FAILURE,
    error:error
})


export const changeConfirmationPassword = (password:string)=>({
    type: CHANGE_CONFIRMATION_PASSWORD,
    payload:{password}
})

export const registerUser = ()=>(dispatch:Dispatch,getState:any)=>{
    const {username,password} = getState().registration;
    dispatch(notifyRegisterInProgress());
    auth().createUserWithEmailAndPassword(username,password).then(()=>{
        dispatch(notifyRegisterSuccess())
    }).catch((err)=>{
        dispatch(notifyRegisterFailure(err))
    })
}