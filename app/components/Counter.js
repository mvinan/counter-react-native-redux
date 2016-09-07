import PlusButton from '../containers/PlusButton'
import MinousButton from '../containers/MinousButton'
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import {connect} from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={()=>this.props.navigator.push({title: 'Perfil', index: 0})}>
          <Text>
            Siguiente Vista
          </Text>
        </TouchableHighlight>
        <Text>I'm the Counter component</Text>
        <Text> {this.props.number} </Text>
        <PlusButton />
        <MinousButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = state => {
  return {
    number: state.counter
  }
}


export default connect(mapStateToProps)(Counter)
