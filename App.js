import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

var FBLoginButton = require('./FBLoginButton');

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Welcome to the Facebook SDK for React Native!</Text>
        <FBLoginButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 48,
  },
});

export default App