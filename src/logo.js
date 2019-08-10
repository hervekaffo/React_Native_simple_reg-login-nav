import React, {Component} from 'react';
import { Image } from 'react-native';

import Logo from './images/animal-track.png';

class LogoTitle extends Component {
    render(){
        return(
            <Image
                source={Logo}
                style={{ width:30,height:30}}
            />
        )
    }
}

export default LogoTitle;