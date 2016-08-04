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

import {Home, Video} from './src/android/components'

const routes = [{component: Home}, {component: Video}]

class WeddingGram extends Component {
  addRouteToStack(navigator, routeIndex){
    navigator.push(routes[routeIndex])
  }
  goBackHome(navigator) {
    navigator.popToTop()
  }
  renderScene(route, navigator) {
    return <route.component
        navigateTo={this.addRouteToStack.bind(this, navigator)}
        navigateHome={this.goBackHome.bind(this, navigator)}
      />
  }
  render() {
    return (
      <Navigator
        initialRoute={routes[0]}
        renderScene={this.renderScene.bind(this)}
        />
    )
  }
}

AppRegistry.registerComponent('WeddingGram', () => WeddingGram)
