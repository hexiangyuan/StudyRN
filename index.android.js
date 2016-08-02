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

  constructor(props){
    super(props);
    this.initialRoute={
      name:'home',
      component:Home,
    }
  }

  configureScene(){
    return Navigator.SceneConfigs.VerticalDownSwipeJump;
  }

  renderScene(route,navigator){
    let Component = route.component;
    return <Component {...route.params} navigator={navigator}/>
  }

  render() {
    return (
      <Navigator
        initialRoute={this.initialRoute}
        configureScene={this.configureScene.bind(this)}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}

AppRegistry.registerComponent('StudyRN',()=>StudyRN);
