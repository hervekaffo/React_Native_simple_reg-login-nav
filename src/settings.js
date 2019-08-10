import React, {Component} from 'react';
import { Text,View,Button } from 'react-native';

class SettingsComponent extends Component {
    render(){
        return(
            <View>
                <Text>I am the setttings screen</Text>
                <Button
                    title="Go to Users"
                    onPress={()=> this.props.navigation.navigate('Users',{
                        userId: 12,
                        userName:'Francis',
                        userLastName:'Jones'
                    })}
                />
            </View>
        )
    }
}

export default SettingsComponent;