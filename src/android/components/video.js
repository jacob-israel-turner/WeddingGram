import React, {Component} from 'react'

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native'

import Camera from 'react-native-camera'

console.log(Camera)
console.log(Camera.constants)

export default class Video extends Component {
  takePicture(pic) {
    console.log('PIC', pic)
  }
  render() {
    console.log('RENDERING VIDEO')
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
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
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
})
