import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput} from 'react-native'
import React, {useState} from 'react'
import Favicon from '../../../assets/favicon.png'
import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from "react-hook-form";

const SignInScreen = () => {

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const {control, handleSubmit, formState: {errors}} = useForm();

  const onSignInPressed = (data) => {
    console.log(data);
 
    //validate user
    navigation.navigate('Home');
  };
  const onForgotPasswordPressed = (data) => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Image source={Favicon} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain" />

      <CustomInput
      name="username" 
      placeholder="Username" 
      control={control} 
      rules={{required: 'Username is required'}} 
      />
      <CustomInput 
      name="password" 
      placeholder="Password" 
      control={control} 
      secureTextEntry
      rules={{
        required: 'Password is required', 
        minLength: {
          value: 3,
          message: 'Password should be atleast 3 characters'},
    }}
      />
      
      <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />
      <CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY" />

    <SocialSignInButtons />

      <CustomButton 
        text="Don't have an account? Create one" 
        onPress={onSignUpPressed} 
        type="TERTIARY" 
        />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen