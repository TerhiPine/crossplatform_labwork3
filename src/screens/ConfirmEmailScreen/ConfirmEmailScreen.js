import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form';

const ConfirmEmailScreen = () => {
  const [control, handleSubmit] = useForm();

  const navigation = useNavigation();


  const onConfirmPressed = (data) => {
    navigation.navigate('Home');
  };
  const onSignInPress= () => {
    navigation.navigate('SignIn');
  };
  const onResendPress = () => {
    console.warn('onResendPress');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Confirm your email</Text>

      <CustomInput
        name="code"
        control={control} 
        placeholder="Enter your confirmation code"
        rules={{
          required: 'Confirmation code'
        }} 
        />

      <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />
      
      <CustomButton 
        text="Resend code" 
        onPress={onResendPress} 
        type="SECONDARY" 
        />

      <CustomButton 
        text="Back to Sign in" 
        onPress={onSignInPress} 
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075'
  },
});

export default ConfirmEmailScreen