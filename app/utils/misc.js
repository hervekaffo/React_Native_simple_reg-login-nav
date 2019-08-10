import {
    AsyncStorage
} from 'react-native';

export const FIREBASEURL = ``;
export const APIKEY = ``;
export const SIGNUP = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${APIKEY}`;
export const SIGNIN = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${APIKEY}`;
export const REFRESH = `https://securetoken.googleapis.com/v1/token?key=${APIKEY}`;


export const getTokens = (cb) => {

    AsyncStorage.multiGet([
        '@native_02@token',
        '@native_02@refreshToken',
        '@native_02@expireToken',
        '@native_02@uid'
    ]).then( value => {
        
        cb(value);
    });
}

export const setTokens = (values,cb) => {
    const dateNow = new Date();
    const expiration = dateNow.getTime() + (3600 * 1000);
 
    AsyncStorage.multiSet([
        ['@native_02@token',values.token],
        ['@native_02@refreshToken',values.refToken],
        ['@native_02@expireToken',expiration.toString()],
        ['@native_02@uid',values.uid]
    ]).then( response => {
        cb();
    });
}
