import { StyleSheet, Text, View, Dimensions, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Password } from '../../components';
import { BLACK, PRIMARY_FONT, PRIMARY_GREEN, TEXT_FONT, LIGHT, showSomePasswordComponents } from '../../utils'

const Stack = createNativeStackNavigator();

const FormSection = ({navigation}) => {
  const [firstname, onChangeFirstname] = useState('');
  const [lastname, onChangeLastname] = useState('');
  const [email, onChangeEmail] = useState('');
  const [phone, onChangePhone] = useState('');
  const [code, onChangeCode] = useState('');

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.title}>SignUp</Text>
      <TextInput style={styles.input} placeholder='First Name' value={firstname} onChangeText={onChangeFirstname} />
      <TextInput style={styles.input} placeholder='Last Name' value={lastname} onChangeText={onChangeLastname} />
      <TextInput style={styles.input} placeholder='someone@mail.com' keyboardType='email-address' value={email} onChangeText={onChangeEmail} />
      <TextInput style={styles.input} placeholder='Phone (0812-3456-7890)' keyboardType='numeric' value={phone} onChange={onChangePhone} />

      <View>
        <TextInput style={styles.code} placeholder='CODE' keyboardType='numeric' value={code} onChange={onChangeCode} />
        <View style={styles.buttonLogin}>
          <Text style={{ color: LIGHT, fontFamily: PRIMARY_FONT, fontSize: 18, }} onPress={() => {navigation.replace('PasswordSection')}}>Verivikasi</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginVertical: 10 }}>
        <Text style={{ marginRight: 5, color: BLACK, fontFamily: PRIMARY_FONT }}>Sudah Memiliki Akun?</Text>
        <Text style={{ textDecorationLine: 'underline', color: BLACK, fontFamily: PRIMARY_FONT, fontWeight: 'bold' }} onPress={() => {navigation.push('Login')}} >Login</Text>
      </View>
    </ScrollView>
  );
}

const PasswordSection = ({navigation}) => {
  const [username, onChangeUsername] = useState('AlexCinatra');
  const [password, onChangePassword] = useState('');
  const [confPassword, onChangeConfPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buat Password</Text>

      <TextInput style={styles.input} placeholder={username} value={username} onChangeText={onChangeUsername} />
      <Password costumPlaceholder={'Type Your Password'} value={password} onChangeText={onChangePassword} />
      <Password costumPlaceholder={'Type Your Confirm Password'} value={confPassword} onChangeText={onChangeConfPassword} />
      <View style={{ marginVertical: 20, borderWidth: 1, paddingVertical: 10, paddingHorizontal: 5, borderRadius: 5, width: width * 0.75 }}>

        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
          <Text style={{ fontFamily: PRIMARY_FONT, fontSize: 15, color: BLACK, marginRight: 3 }}>Your username is</Text>
          <Text style={{ fontFamily: PRIMARY_FONT, fontSize: 15, color: BLACK, fontWeight: 'bold' }}>{username ? username : 'none'}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <Text style={{ fontFamily: PRIMARY_FONT, fontSize: 15, color: BLACK, marginRight: 3 }}>Your password is</Text>
          <Text style={{ fontFamily: PRIMARY_FONT, fontSize: 15, color: BLACK, fontWeight: 'bold' }}>{showSomePasswordComponents(password)}</Text>
        </View>
      </View>
      <View style={styles.buttonLogin}>
        <Text style={{ color: LIGHT, fontFamily: PRIMARY_FONT, fontSize: 18, }} onPress={() => {navigation.replace('MainApp')}}>Create An Acount</Text>
      </View>
    </View>
  )
}


const Signup = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Form' component={FormSection} />
      <Stack.Screen name='PasswordSection' component={PasswordSection} />
    </Stack.Navigator>
  )
}

export default Signup;

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: TEXT_FONT,
    color: BLACK,
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 50
  },
  input: {
    height: 45,
    width: width * 0.75,
    borderColor: 'black',
    paddingHorizontal: 10,
    marginVertical: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: PRIMARY_FONT,
    fontSize: 15
  },
  code: {
    height: 45,
    width: width * 0.75,
    borderColor: 'black',
    paddingHorizontal: 10,
    marginVertical: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: PRIMARY_FONT,
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonLogin: {
    backgroundColor: PRIMARY_GREEN,
    height: 45,
    width: width * 0.75,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  }
})