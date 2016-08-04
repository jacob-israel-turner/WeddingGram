/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

class WeddingGram extends Component {
  constructor() {
    super();
    this.state = {name: null};
  }
  handleNameChange(e) {
    this.setState({name: e.nativeEvent.text});
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.jv}>
            J&V
          </Text>
          <Text style={styles.message}>
            Leave a message for the newlyweds!
          </Text>
        </View>
        <View style={styles.nameInputContainer}>
          <TextInput
            style={styles.nameInput}
            placeholder={'Enter your name(s)!'}
            autoCapitalize={'words'}
            onChange={this.handleNameChange.bind(this)}
            value={this.state.name} />
        </View>
        <View style={styles.touchableContainer}>
          <TouchableOpacity style={styles.touchable}>
            <Text style={styles.touchableText}>Video</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable}>
            <Text style={styles.touchableText}>Picture</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  nameInputContainer: {
    alignItems: 'center'
  },
  nameInput: {
    width: 750,
    textAlign: 'center',
    fontSize: 24
  },
  jv: {
    fontSize: 72,
    textAlign: 'center',
    margin: 10,
  },
  message: {
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  touchableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  touchable: {
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    borderColor: '#222',
    borderWidth: 2,
    borderRadius: 3
  },
  touchableText: {
    fontSize: 48,
  }
});

AppRegistry.registerComponent('WeddingGram', () => WeddingGram);