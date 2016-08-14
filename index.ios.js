import React, { Component } from 'react'
import {
  AppRegistry,
  Navigator,
} from 'react-native'

import {routes} from './src/services/navigation'

class WeddingGram extends Component {
  constructor() {
    super()
    this.state = {
      props: {}
    }
  }
  addRouteToStack(navigator, routeIndex, props){
    this.setState({props}, () => navigator.push(routes[routeIndex]))
  }
  goBackHome(navigator) {
    navigator.popToTop()
  }
  renderScene(route, navigator) {
    return <route.component
        navigateTo={this.addRouteToStack.bind(this, navigator)}
        navigateHome={this.goBackHome.bind(this, navigator)}
        {...this.state.props}
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
