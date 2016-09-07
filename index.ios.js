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
  View,
  Navigator
} from 'react-native';
import Counter from './app/components/Counter'
import Perfil from './app/components/Perfil'

/*Redux*/
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReduxers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import store from './app/store'

class CounterRedux extends Component {
  renderScene(route, navigator) {
    switch (route.title) {
      case 'Counter':
        return <Counter route={route} navigator={navigator}/>
      case 'Perfil':
        return <Perfil route={route} navigator={navigator}/>
      default:
        return <Text> Ningua Vista Renderizada</Text>
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{title: 'Counter', index: 0}}
          renderScene={this.renderScene.bind(this)}/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CounterRedux', () => CounterRedux);
