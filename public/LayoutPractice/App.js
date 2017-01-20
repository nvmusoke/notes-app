import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import Foo from './Foo'

class App extends React.Component {
  render() {
    console.log(this.props.navigator);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Foo
        </Text>
        <TouchableHighlight onPress={() => {
          this.props.navigator.push({
            name: 'Foobar',
            title: 'Boom'
          })
        }}>
          <Text style={styles.instructions}>
            Bar
          </Text>
        </TouchableHighlight>
        <Text style={styles.instructions}>
          Baz
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  welcome: {
    // backgroundColor: 'green',
    // flex: 1
  },
  instructions: {
    // backgroundColor: 'maroon',
    // flex: 2
  },
});


export default App;
