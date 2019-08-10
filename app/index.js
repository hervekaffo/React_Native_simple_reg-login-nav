
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import{ RootNavigator } from './routes';

import { connect } from 'react-redux';
// import { getArticles } from './src/actions';


class App extends Component{


  render() {
    const Nav = RootNavigator();

    return (
      <View style={styles.container}>
        <Nav />
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



export default App;