
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, AsyncStorage} from 'react-native';


//import the list component 
import ListExample from '../list/list';

class GameArticle extends Component{

  clearAsyncStorage = async() => {
    AsyncStorage.clear();
}

  render() {

    return (
      <View style={styles.container}>
        <Text> Hello i am the game Article component</Text>
        <Button 
          title = "Clear AsyncStorage/Logout"
          onPress={this.clearAsyncStorage}
        />
        <ListExample />
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
    padding: 40
  }
});



export default GameArticle;