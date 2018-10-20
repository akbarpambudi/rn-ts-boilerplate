import { Action, AuthenticationState } from './reducer';
import { CHANGE_USERNAME, CHANGE_PASSWORD, NOTIFY_LOGIN_IN_PROGRESS, NOTIFY_LOGIN_SUCCESS, NOTIFY_LOGIN_FAILURE, NOTIFY_LOGIN_PRISTINE } from './action-type';
import { Dispatch } from 'redux';
import { auth } from './../../../common/lib/firebase-mock';


export const changeUsername = (username:string):Action=>({
        type : CHANGE_USERNAME,
        payload : {username}
    })


export const changePassword = (password:string):Action=>({
    type: CHANGE_PASSWORD,
    payload: {password}
})

export const notifyLoginInProgress = ():Action=>({
    type: NOTIFY_LOGIN_IN_PROGRESS
});

export const notifyLoginSuccess = (user:object):Action=>({
    type:NOTIFY_LOGIN_SUCCESS,
    payload:{user}
});



export const notifyLoginFailure = (err:object):Action=>({
    type:NOTIFY_LOGIN_FAILURE,
    payload:{err}
});

export const notifyLoginPristine = ():Action=>({
    type:NOTIFY_LOGIN_PRISTINE,
});

export const login = ()=>(dispatch:Dispatch,getState:any)=>{
    const authentication:AuthenticationState  = getState().authentication as AuthenticationState;
    dispatch(notifyLoginInProgress());
    auth().signInWithEmailAndPassword(authentication.username,authentication.password).then((authResult:any)=>{
        dispatch(notifyLoginSuccess(authResult.user));
    }).catch((err)=>dispatch(notifyLoginFailure(err)));
}
