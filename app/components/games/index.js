
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';




class GamesComponent extends Component{


  render() {

    return (
      <View style={styles.container}>
        <Text> Hello i am the Games</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});



export default GamesComponent;