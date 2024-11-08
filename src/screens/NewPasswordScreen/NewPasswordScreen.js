import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useForm } from 'react-hook-form';

import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
  const {control, handleSubmit} = useForm();

  const navigation = useNavigation();

  const onSubmitPressed = (data) => {
    navigation.navigate('Home');
  };
  const onSignInPress= () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Reset your password</Text>

      <CustomInput 
        placeholder="Code"
        value={code} 
        setValue={setCode} 
        />
      <CustomInput 
        placeholder="New password"
        value={newPassword} 
        setValue={setNewPassword} 
        />

      <CustomButton text="Submit" onPress={onSubmitPressed} />
      

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

export default NewPasswordScreen