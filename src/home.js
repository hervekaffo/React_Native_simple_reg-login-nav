import React, {Component} from 'react';
import { Text, View, Button,Image} from 'react-native';

import Logo from './images/animal-track.png';
import LogoTitle from '../src/logo';

class HomeScreen extends Component{
  static navigationOptions = {
    drawerLabel:'Notifications',
    headerTitle:LogoTitle,
    drawerIcon:()=> (
      <Image
        source={Logo}
        style={{width:30,height:30}}
      />
    )
  }


    // static navigationOptions = ({navigation}) => {
    //   return {
    //       headerLeft:(
    //         <Button
    //           title="B"
    //           onPress={ () => navigation.navigate('Users')}
    //         />
    //       ),
    //       headerRight:(
    //         <Button
    //           title="R"
    //           onPress={ () => navigation.navigate('Users')}
    //         />
    //       )
    //   }
    // }

  render() {
    return (
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
      }}>
            <Text>Home screen</Text>
            {/* <Button
                title="open sidedrawer"
                onPress={()=> this.props.navigation.openDrawer()}
            /> */}

            <Button
                title="Go to users"
                onPress={
                    ()=> this.props.navigation.navigate('Users',{
                        userId: 12,
                        userName:'Herve',
                        userLastName:'Mercure'
                    })
                }
            />
            <Text>
                {this.props.navigation.getParam('message','N/A')}
            </Text>
      </View>
    );
  }
}

export default HomeScreen;