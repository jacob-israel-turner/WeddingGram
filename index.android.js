/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  Navigator,
} from 'react-native'

import {Home} from './src/android/components'

const routes = [{component: Home}, {component: Second}]

class Second extends Component {
  render() {
    return <Text>Hello!</Text>
  }
}

class WeddingGram extends Component {
  render() {
    return (
      <Navigator
        initialRoute={routes[0]}
        renderScene={route => <route.component />}
        />
    )
  }
}

AppRegistry.registerComponent('WeddingGram', () => WeddingGram)
