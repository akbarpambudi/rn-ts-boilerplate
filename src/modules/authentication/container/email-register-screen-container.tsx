import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import RegistrationScreen from '../component/registration-screen';
import {LoginStatus} from './../store/authentication/reducer';
import * as actions from './../store/registration/action';
import { RegistrationStatus } from '../store/registration/reducer';
interface Props{
    changeUsername(username:string):void;
    changePassword(password:string):void;
    resetState():void;
    registerUser():void;
    registrationStatus:RegistrationStatus,
    error:Error
}

class EmailAuthenticationScreenContainer extends Component<Props>{

  render() {
    return (
        <RegistrationScreen
          onRegisterButtonPress={this.props.registerUser} 
          onPasswordChanged={this.props.changePassword}
          onUsernameChanged={this.props.changeUsername}
          registerInProgress={this.props.registrationStatus === RegistrationStatus.IN_PROGRESS}
        />
    )
  }
}

const mapStateToProps = (state:any) => ({
  registrationStatus:state.authentication.status,
  error:state.authentication.err
})

const mapDispatchToProps = {
    ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailAuthenticationScreenContainer)
