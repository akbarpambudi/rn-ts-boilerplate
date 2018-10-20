import {createStackNavigator} from 'react-navigation';
import EmailAuthenticationScreenContainer from '../../modules/authentication/container/email-authentication-screen-container';
import EmailRegisterScreenContainer from '../../modules/authentication/container/email-register-screen-container';


export default createStackNavigator({
    authentication : EmailAuthenticationScreenContainer,
    registration: EmailRegisterScreenContainer
});