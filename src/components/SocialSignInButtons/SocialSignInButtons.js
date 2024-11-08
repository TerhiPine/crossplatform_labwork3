import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton/CustomButton';

const SocialSignInButtons = () => {
    const onSignInFacebook = () => {
        console.warn('facebook');
    };
    const onSignInGoogle = () => {
        console.warn('Google');
    };
    const onSignInApple = () => {
        console.warn('Apple');
    };
  return (
    
    <>
        <CustomButton 
            text="Sign In with Facebook" 
            onPress={onSignInFacebook}
            bgColor="#E7EAF4"
            fgColor="#4765A9"
        />
        <CustomButton 
            text="Sign In with Google" 
            onPress={onSignInGoogle} 
            bgColor="#FAE9EA"
        f   gColor="#4765A9"
        />

        <CustomButton 
            text="Sign In with Apple" 
            onPress={onSignInApple}
            bgColor="#e3e3e3"
            fgColor="#363636"
        />
    </>
  )
}

export default SocialSignInButtons