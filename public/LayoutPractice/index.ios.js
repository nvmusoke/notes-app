/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  TouchableHighlight
} from 'react-native';

import App from './App';
import Foo from './Foo';

class LayoutPractice extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Awesome Scene', index: 0 }}
        renderScene={(route, navigator) => {
          let TheComponent = App;
          if (route.name === 'Foobar') {
            TheComponent = Foo
          }
          return <TheComponent navigator={navigator} />
        }
        }
      />
    )
  }
}

AppRegistry.registerComponent('LayoutPractice', () => LayoutPractice);
