import React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import {NavigationEvents} from 'react-navigation';

const BottomNav = props => {
  return (
    <View style={styles.bottomAlign}>
      <View style={styles.container}>
        <Button title="FirstPage" onPress={() => props.navigate('FirstPage')} />
        <Button
          title="SecondPage"
          onPress={() => props.navigate('SecondPage')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  bottomAlign: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
});
export default BottomNav;
