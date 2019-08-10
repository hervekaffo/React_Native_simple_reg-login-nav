import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet } from 'react-native';

class ListExample extends React.Component {

  state ={ 
      isLoading: true
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
          dataSource1: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }


  

  render(){

    // const movieslist = this.state.dataSource;
    // const moviesl = movieslist.filter((movie)=> movie.year >= 2000);
    // alert(moviesl);

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <Text style={styles.h2text}>
          List of Movies!!
        </Text>
        <FlatList
          data={this.state.dataSource}
          showsVerticalScrollIndicator={true}
          renderItem={({item}) =>
            <View style={styles.flatview}>
                <Text style={styles.name}> {item.title} </Text>
                <Text style={styles.email}>{item.releaseYear}</Text>
            </View>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    h2text: {
      marginTop: 10,
      fontFamily: 'Helvetica',
      fontSize: 36,
      fontWeight: 'bold',
    },
    flatview: {
      justifyContent: 'center',
      paddingTop: 30,
      borderRadius: 2,
    },
    name: {
      fontFamily: 'Verdana',
      fontSize: 18
    },
    email: {
      color: 'red'
    }
    
  });

export default ListExample;