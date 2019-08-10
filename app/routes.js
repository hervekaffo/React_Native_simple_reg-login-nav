import React from 'react';
import { Platform, Image} from "react-native";

import {
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import IcoImg from './assets/images/icons/icon1.svg'

// Screens to show 
import SignIn from './components/auth';
import News from './components/news';
import Article from './components/news/article';
import Games from './components/games';
import GamesArticle from './components/games/article';
import LogoTitle from './utils/logo'; 

const headerConf = {
    headerLayoutPreset:'center',
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#33473e'
        },
        headerTintColor:'white',
        headerTitle:LogoTitle
    }
}


const NewsStack = createStackNavigator({
    News:News,
    Article:Article
},headerConf);

const GameStack = createStackNavigator({
    Games:Games,
    Article:GamesArticle
},headerConf);

const AppStack = createBottomTabNavigator({
    News:NewsStack,
    Games:GameStack
},{
    tabBarOptions:{
        activeTintColor:'#fff',
        showLabel:false,
        activeBackgroundColor:'#22360a',
        inactiveBackgroundColor:'#33473e',
        style: {
            backgroundColor: '#33473e',
        }
    },
    initialRouteName:'News',
    defaultNavigationOptions:({navigation})=>({
        // tabBarIcon:({focused,horizontal,tintColor})=>{
        //     const  { routeName } = navigation.state;
        //     let iconName;
        //     if(routeName === 'News'){
        //         iconName = `ios-basketball`;
        //     } else if(routeName === 'Games'){
        //         iconName = `md-tv`;
        //     }

        //     return <Ionicons name={iconName} size={25} color={tintColor}/>;
        //}
    })
});

const AuthStack = createStackNavigator({
    SignIn:SignIn
},{
    headerMode: 'none'
});


export const RootNavigator = () => {
    return createAppContainer(createSwitchNavigator({
        App:AppStack,
        Auth:AuthStack
    },{
        initialRouteName:'Auth'
    }))
}