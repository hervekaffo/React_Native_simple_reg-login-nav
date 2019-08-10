import React, {Component} from 'react';
import { ScrollView ,Text, View, StyleSheet,Image} from 'react-native';
import { NavigationActions } from 'react-navigation';

import Logo from './images/animal-track.png';

class SideMenu extends Component {

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction)
    }


    render(){
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <View style={styles.navImageContainer}>
                            <Image
                                source={Logo}
                                style={{
                                    width:50,
                                    height:50
                                }}
                            />
                        </View>
                        <Text style={styles.sectionHeadingStyle}>
                            Section 1
                        </Text>
                        <View style={styles.navSectionStyle}>
                            <Text 
                                style={styles.navItemStyle}
                                onPress={this.navigateToScreen('Home')}
                            >
                                Home
                            </Text>
                            <Text 
                                style={styles.navItemStyle}
                                onPress={this.navigateToScreen('Users')}
                            >
                                Users
                            </Text>
                            <Text 
                                style={styles.navItemStyle}
                                onPress={this.navigateToScreen('Home')}
                            >
                                Contact
                            </Text>
                            <Text 
                                style={styles.navItemStyle}
                                onPress={this.navigateToScreen('Users')}
                            >
                                Uploads
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footerContainer}>
                    <Text>Copyright@</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:40
    },
    navImageContainer:{
        justifyContent:'center',
        alignItems:'center',
        padding:50
    },
    sectionHeadingStyle:{
        color:'#fff',
        backgroundColor:'#04b6ff',
        paddingVertical:10,
        paddingHorizontal:10
    },
    navSectionStyle:{
        backgroundColor:'#2e2e2e'
    },
    navItemStyle:{
        padding:10,
        color:'#fff'
    },
    footerContainer:{
        padding:20,
        backgroundColor:'lightgrey'
    }
});

export default SideMenu;