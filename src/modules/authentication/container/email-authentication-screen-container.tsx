import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import AuthenticationScreen from '../component/authentication-screen';
import {LoginStatus} from './../store/authentication/reducer';
import * as actions from './../store/authentication/action';
import { StackActions } from 'react-navigation';

interface Props{
    changeUsername(username:string):void;
    changePassword(password:string):void;
    notifyLoginPristine():void;
    login():void;
    loginStatus:LoginStatus,
    error:Error,
    navigateToRegister():void
}

class EmailAuthenticationScreenContainer extends Component<Props>{

  render() {
    return (
        <AuthenticationScreen
          error={{isError:this.props.loginStatus == LoginStatus.FAILURE,error:this.props.error}} 
          onLoginPress={this.props.login} 
          onErrorButtonPress={this.props.notifyLoginPristine}
          onPasswordChanged={this.props.changePassword}
          onUsernameChanged={this.props.changeUsername}
          onRegisterButtonPress={this.props.navigateToRegister}
          isLogin={this.props.loginStatus == LoginStatus.IN_PROGRESS}
        />
    )
  }
}

const mapStateToProps = (state:any) => ({
  loginStatus:state.authentication.status,
  error:state.authentication.err
})

const mapDispatchToProps = {
    ...actions,
    navigateToRegister:()=>{return StackActions.push({routeName:"registration"})}
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailAuthenticationScreenContainer)
