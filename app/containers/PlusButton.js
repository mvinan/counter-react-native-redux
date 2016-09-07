/*Redux*/
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCount } from '../actions'

/*React Native*/
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import styles from '../styles'

const mapStateToProps = (state) => ({ currentNumber: state.counter })

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({addCount}, dispatch)
}


class PlusButton extends Component {
  increment(){
    this.props.addCount(this.props.currentNumber)
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        onPress={this.increment.bind(this)}>
        <Text style={styles.textButton}>Aumentar</Text>
      </TouchableHighlight>
    );
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(PlusButton)
