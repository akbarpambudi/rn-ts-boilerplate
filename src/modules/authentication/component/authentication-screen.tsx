import React, { Component } from 'react'
import { View, Alert,StyleSheet,Dimensions, KeyboardAvoidingView } from 'react-native'
import { Input, Button, Overlay, Card,Text, Divider, Icon } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
interface AuthError {
    isError:boolean,
    error:Error
  }

export interface Props {
  onUsernameChanged(username:string):void;
  onPasswordChanged(password:string):void;
  onErrorButtonPress():void;
  onLoginPress():void;
  onRegisterButtonPress():void;
  isLogin?:boolean;
  error:AuthError
}

class AuthenticationScreen extends Component<Props> {

  renderErrorOverlay = (err:AuthError)=>{
   if(err){
      return (<Overlay
        isVisible={err.isError}
        windowBackgroundColor="rgba(255, 255, 255, .5)"
        width="auto"
        height="auto"
      >
      <View>
          <Text h3>Oops..</Text>
          <Divider style={{backgroundColor:'#ecece'}}/>
          {err.error && <Text>{err.error.message}</Text>}
          <Button onPress={this.props.onErrorButtonPress}>Ok</Button>
      </View>
      </Overlay>);
   }
   return null;
  }
  
  render() {
    const error:AuthError = this.props.error;
    return (
      <View style={styles.container}>
        {this.renderErrorOverlay(error)}
        <View style={styles.bodyContainer}>
          <Input 
            inputContainerStyle={{borderBottomWidth:0}} 
            leftIcon={<Icon name="person"/>}
            placeholder="Username"
            containerStyle={styles.inputContainer} 
            onChangeText={this.props.onUsernameChanged}/>
          <Input 
            inputContainerStyle={{borderBottomWidth:0}} 
            leftIcon={<Icon name="lock"/>}  
            secureTextEntry={true} 
            placeholder="Password" 
            containerStyle={styles.inputContainer}  
            onChangeText={this.props.onPasswordChanged}/>
        </View>
        <View style={styles.footerContainer}>
          <Button 
            style={{flex:1,justifyContent:'center'}} 
            onPress={this.props.onLoginPress} 
            buttonStyle={{backgroundColor:"#2196f3"}} 
            title="Login"/>
          <Button 
            style={{flex:1,justifyContent:'center'}} 
            buttonStyle={{backgroundColor:"#6f74dd"}}
            onPress={this.props.onRegisterButtonPress} 
            title="Create new Account"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container:{
     flex:1,
     padding: 5,
     backgroundColor:"#fff"
   },
    bodyContainer:{
      flex:10,
      alignItems:'center'
   },
   inputContainer:{
    borderWidth:2,
    borderColor: "#efefef",
    borderRadius: 30,
    margin:5,
    padding:5
   },
   footerContainer:{
     flex:2,
     justifyContent:'space-around'
   }
});

export default AuthenticationScreen