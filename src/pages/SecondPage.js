import React, {Component} from 'react';

import {StyleSheet, View, Button, Text} from 'react-native';

import BottomNav from '../utils/BottomNav';

export default class SecondPage extends Component {
  static navigationOptions = {
    title: 'Second Page',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text
          style={{
            justifyContent: 'center',
            backgroundColor: 'red',
            flex: 1,
            alignItems: 'center',
          }}>
          This is Second page
        </Text>
        <BottomNav navigate={navigate} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
