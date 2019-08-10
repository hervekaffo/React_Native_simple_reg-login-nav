import React from 'react';
import { View, Image } from 'react-native';

import LogoImage from '../../assets/images/kaffo_logo.png';

const LogoComponent = () => (
    <View>
        <Image
            source={LogoImage}
            resizeMode={'center'}
            style={{
                width:270,
                height:180
            }}
        />
    </View>
)

export default LogoComponent;