import React, {Component} from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native'

import Camera from 'react-native-camera'

import {handlePictureTaken} from '../../services/camera'

export default class Video extends Component {
  constructor() {
    super()
    this.state = {
      type: Camera.constants.Type.front,
      orientation: 0
    }
  }
  takePicture(pic) {
    this.camera.capture()
      .then(pic => handlePictureTaken(pic) || this.props.navigateHome())
      .catch(e => console.warn(e))
  }
  rotateCamera() {
    this.setState({type: this.state.type === Camera.constants.Type.front ? Camera.constants.Type.back : Camera.constants.Type.front})
  }
  componentDidMount() {
    setTimeout(() => this.setState({orientation: this.state.orientation < 3 ? this.state.orientation + 1 : 0}), 2000)
  }
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam
          }}
          orientation={this.state.orientation}
          style={styles.preview}
          type={this.state.type}
          aspect={Camera.constants.Aspect.fit}>
          <View style={styles.iconsContainer}>
            <Icon style={styles.capture} name='switch-video' size={40} color='#BBB' />
            <Icon style={styles.capture} name='radio-button-checked' size={60} color='#b70f0a' onPress={this.takePicture.bind(this)} />
            <Icon style={styles.capture} name='loop' size={40} color='#BBB' onPress={this.rotateCamera.bind(this)} />
          </View>
        </Camera>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#333'
  },
  iconsContainer: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    margin: 35,
  }
})
