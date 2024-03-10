import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { BLACK, PRIMARY_FONT, PRIMARY_GREEN, SHADE_GREEN, TEXT_FONT, LIGHT } from '../../utils'
import { Password } from '../../components';

const Login = ({navigation}) => {

  const [identity, onChangeIdentity] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder='Type Your Email or Username'  value={identity} onChangeText={onChangeIdentity} />
      <Password costumPlaceholder={'Type Your Password'} value={password} onChangeText={onChangePassword} />
      <TouchableOpacity style={styles.buttonLogin} onPress={() => {navigation.replace('MainApp')}}>
        <Text style={{color: LIGHT, fontFamily: PRIMARY_FONT, fontSize: 18,}} >Login</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', marginVertical: 10}}>
        <Text style={{marginRight: 5, color: BLACK, fontFamily: PRIMARY_FONT}}>Belom Memiliki Akun?</Text>
        <Text style={{textDecorationLine:'underline', color: BLACK, fontFamily: PRIMARY_FONT, fontWeight: 'bold'}} onPress={() => navigation.navigate('SignUp')}>Daftar</Text>
      </View>
    </View>
  )
}


export default Login

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
  },
  buttonLogin:{
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