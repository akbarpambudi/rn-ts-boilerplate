import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import { Input, Icon, Button } from 'react-native-elements';

export interface Props {
    onUsernameChanged(username:string):void;
    onPasswordChanged(password:string):void;
    onRegisterButtonPress():void;
    registerInProgress?:boolean;
  }

export class RegistrationScreen extends Component<Props> {


  render() {
    return (
        <View style={styles.container}>
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
            loading={this.props.registerInProgress}
            style={{flex:1,justifyContent:'center'}} 
            buttonStyle={{backgroundColor:"#6f74dd"}} 
            onPress={this.props.onRegisterButtonPress}
            title="Create new Account"/>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state:any) => ({
  
})

const mapDispatchToProps = {
  
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
 

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationScreen)

