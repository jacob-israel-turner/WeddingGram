import React, {Component} from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native'

import Camera from 'react-native-camera'



export default class Video extends Component {
  constructor() {
    super()
    this.state = {
      type: Camera.constants.Type.front,
      orientation: 0,
      captureMode: Camera.constants.CaptureMode.still,
      isCapturing: false,
    }
  }
  async takePicture() {
    try {
      const pic = await this.camera.capture()
      this.props.navigateTo(2, pic)
    } catch (e) {
      console.warn(e)
    }
  }
  // takeVideo() {
  //   if (this.state.isCapturing) {
  //     this.setState({isCapturing: false})
  //     this.camera.stopCapture()
  //   } else {
  //     this.setState({isCapturing: true})
  //     this.camera.capture()
  //       .then(vid => handlePictureTaken(vid) || this.props.navigateHome())
  //       .catch(e => console.warn(e))
  //   }
  // }
  handleCameraPress() {
    this.state.captureMode === Camera.constants.CaptureMode.still ?
      this.takePicture() :
      this.takeVideo()
  }
  rotateCamera() {
    this.setState({type: this.state.type === Camera.constants.Type.front ? Camera.constants.Type.back : Camera.constants.Type.front})
  }
  toggleCaptureMode() {
    const {still, video} = Camera.constants.CaptureMode
    this.setState({captureMode: this.state.captureMode === still ? video : still})
  }
  handleCancel() {
    this.props.navigateHome()
  }
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam
          }}
          captureMode={this.state.captureMode}
          orientation={this.state.orientation}
          style={styles.preview}
          type={this.state.type}
          aspect={Camera.constants.Aspect.fit}>
          <Icon style={[styles.icon, styles.clear]} name='clear' size={40} color='#BBB' onPress={this.handleCancel.bind(this)} />
          <View style={styles.iconsContainer}>
            {/* this.state.captureMode === Camera.constants.CaptureMode.still ?
              <Icon style={styles.capture} name='switch-camera' size={40} color='#BBB' onPress={this.toggleCaptureMode.bind(this)} /> :
              <Icon style={styles.capture} name='switch-video' size={40} color='#BBB' onPress={this.toggleCaptureMode.bind(this)} />
            */}
            <View style={styles.icon} />
            <Icon style={styles.icon} name='radio-button-checked' size={60} color='#b70f0a' onPress={this.handleCameraPress.bind(this)} />
            <Icon style={styles.icon} name='loop' size={40} color='#BBB' onPress={this.rotateCamera.bind(this)} />
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
  clear: {
    alignSelf: 'flex-end'
  },
  iconsContainer: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  preview: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  icon: {
    flex: 0,
    margin: 35,
    backgroundColor: 'transparent',
  }
})
