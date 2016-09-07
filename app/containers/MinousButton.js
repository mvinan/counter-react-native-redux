import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import styles from '../styles'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { removeCount } from '../actions'
import store from '../store'

class MinousButton extends Component {
  decrement(){
    const {currentNumber, removeCount} = this.props
    if(currentNumber == 0){
      alert('No se permite bajar de 0')
      return currentNumber
    }
    return removeCount(currentNumber)
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        onPress={this.decrement.bind(this)}
      >
        <Text style={styles.textButton}>Bajar</Text>
      </TouchableHighlight>
    );
  }
}

const mapStateToProps = (state) => ({
  currentNumber: state.counter
})

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({removeCount}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MinousButton)
