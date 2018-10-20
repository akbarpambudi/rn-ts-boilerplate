import { Reducer } from "redux";
import {createNavigationReducer, reduxifyNavigator, createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import routeConfig from "./route-config";
import { connect } from 'react-redux';
import { Component } from "react";

export const navReducer:Reducer = createNavigationReducer(routeConfig);
export const navMiddleware = createReactNavigationReduxMiddleware(
    "root",
    (state:any) => state.nav,
  );
  

export function createNavComponent():Component{  
  
  const AppNavigator = reduxifyNavigator(routeConfig, "root");
  const mapStateToProps = (state:any) => ({
    state: state.nav,
  });
  return connect(mapStateToProps)(AppNavigator);
} 