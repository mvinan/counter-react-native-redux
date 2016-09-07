import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import styles from '../styles'

import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {
    currentState: state.counter
  }
}

class Perfil extends Component {
  render() {
    let {currentState, navigator} = this.props
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={ ()=>{ navigator.pop()} }>
          <Text>Atras</Text>
        </TouchableHighlight>
        <Text>I'm the Perfil component</Text>
        <Text>And the current State is:  {currentState}</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps)(Perfil)
