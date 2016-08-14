import React, { Component } from 'react'
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native'

import {handlePictureTaken} from '../../services/camera'

export default class AddMessage extends Component {
  constructor() {
    super()
    this.state = {message: null, saving: false}
  }
  handleMessageChange(e) {
    this.setState({message: e.nativeEvent.text})
  }
  async handlePress(type) {
    this.setState({saving: true})
    await handlePictureTaken({message: this.state.message, path: this.props.path})
    this.props.navigateHome()
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.messageInputContainer}>
          <TextInput
            ref='0'
            keyboardType='default'
            style={styles.messageInput}
            placeholder={'Leave a message?'}
            autoCapitalize={'words'}
            onChange={this.handleMessageChange.bind(this)}
            value={this.state.message} />
        </View>
        <View style={styles.touchableContainer}>
          <TouchableOpacity onPress={this.handlePress.bind(this)} style={styles.touchable}>
            <Text style={styles.touchableText}>{this.state.saving ? 'Saving...' : 'Save!'}</Text>
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
  messageInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  messageInput: {
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
