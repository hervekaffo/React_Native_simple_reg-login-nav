import React, {Component} from 'react';
import {
  createStackNavigator, 
  createDrawerNavigator ,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';

import {Image} from 'react-native';

import HomeScreen from './src/home';
import UserScreen from './src/users';
import SettingScreen from './src/settings';

import LogoTitle from './src/logo';
import SideMenu from './src/sidedrawer';

import Icon from './src/images/animal-track.png';

const HomeStack = createStackNavigator({
  Home:HomeScreen,
  Users:UserScreen
});

const OtherStack = createStackNavigator({
  Settings:SettingScreen,
  Users:UserScreen
});

// const AppNavigator = createBottomTabNavigator({
//   Home:HomeStack,
//   Settings:OtherStack
// })

const AppNavigator = createDrawerNavigator({
  Home:HomeStack,
  Settings:OtherStack
})


// const AppNavigator = createBottomTabNavigator({
//   Home:{ 
//     screen:HomeScreen,
//     navigationOptions:({navigation})=>({
//       tabBarIcon:({focused,horizontal,tintColor})=>{
//         const { routeName } = navigation.state;
      
//         return <Image
//           source={Icon}
//           style={{width:30,height:30}}
//         />
//       },
//     })
//   },
//   Users:UserScreen
// },{
//   initialRouteName:'Home',
//   order: ['Users','Home'],
//   tabBarOptions:{
//     showLabel:true,
//     style:{
//       backgroundColor:'green'
//     },
//     labelStyle:{
//       fontSize:20
//     }
//   },
//   defaultNavigationOptions:({navigation})=>({
//       tabBarOnPress:({navigation,defaultHandler})=>{
//         if(navigation.state.key === 'Users' ){
//             //alert('Hello')
//             navigation.navigate('Users');
//         } else {
//           defaultHandler();
//         }
//       }
//   })
// })


// const AppNavigator = createDrawerNavigator({
//   Home:{
//     screen:HomeScreen,
//   },
//   Users:UserScreen
// },{
//   contentComponent:SideMenu,
//   drawerWidth:200,
//   drawerPosition:'right',
//   drawerBackgroundColor:'#fff',
//   drawerType:'back',
//   contentOptions:{
//     activeBackgroundColor:'blue'
//   }
// })


// const AppNavigator = createStackNavigator({
//   Home:{
//     screen: HomeScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: `Home`,
//       headerTitle:LogoTitle,
//       headerBackTitle:'clown'
//     }),
//   },
//   Users:{
//     screen: UserScreen
//   }
// },{
//   initialRouteName: 'Home',
//   defaultNavigationOptions:{
//     headerStyle:{
//       backgroundColor:'green'
//     },
//     headerTintColor:'#fff',
//     headerTitleStyle:{
//         fontWeight:'bold',
//         flex:1,
//         textAlign:'center'
//     },
    
//   }
// })


export default createAppContainer(AppNavigator);