import React, { Component } from 'react'
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {name: null}
  }
  handleNameChange(e) {
    this.setState({name: e.nativeEvent.text})
  }
  handlePress(type) {
    if(!this.state.name) return Alert.alert('Wait!', 'Please enter your name!')
    this.props.navigateTo(1)
    this.setState({name: null}, () => {
      this.refs[0].setNativeProps({text: ''})
      this.refs[0].blur()
    })
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
            ref='0'
            keyboardType='default'
            style={styles.nameInput}
            placeholder={'Enter your name(s)!'}
            autoCapitalize={'words'}
            onChange={this.handleNameChange.bind(this)}
            value={this.state.name} />
        </View>
        <View style={styles.touchableContainer}>
          <TouchableOpacity onPress={this.handlePress.bind(this)} style={styles.touchable}>
            <Text style={styles.touchableText}>Go!</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
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
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 180,
  },
  nameInput: {
    width: 750,
    textAlign: 'center',
    fontSize: 24,
    height: 24,
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
})
