/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AppRegistry,
  Navigator,
} from 'react-native';

import Home from './home';

class StudyRN extends Component {
  render() {
    let defaultName = 'Home';
    let defaultComponent = Home;
    return (
      <Navigator
        initialRoute={
          {
            name:defaultName,
            component:defaultComponent,
          }
        }

        configureScene={
          (route)=>{
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
          }
        }

        renderScene={
          (route,navigator)=>{
            return <route.component {...route.params} navigator={navigator}/>
          }
        }
      />
    );
  }
}

AppRegistry.registerComponent('StudyRN',()=>StudyRN);
