/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import createAppStore from './src/app/store/index';
import reducers from './src/app/store/reducer';
import {navMiddleware}  from './src/app/navigation/navigation-redux';
import { createNavComponent } from './src/app/navigation/navigation-redux';
const store = createAppStore(reducers,navMiddleware);
const AppWithNavigationState = createNavComponent();

interface Props {}
export default class App extends Component<Props> {

  componentDidMount(){
     
    }

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState/>
      </Provider>
    );
  }
}
