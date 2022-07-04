import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  Slider,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { images } from '../assets/images';

const EmailLogin = ({navigation}) => {

  const [hidePass, setHidePass] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={40}
            style={styles.Icon}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.SettingText}>Login</Text>
        </View>
        <View style={{flex: 2}}>
          <Image style={styles.Avatar} source={images.IMG_AVATAR_PNG} />
          <Text style={styles.Text}>Enter your Email to login</Text>
          <Text
            style={{
              marginLeft: 16,
              fontSize: 16,
              marginVertical: 10,
            }}>
            Email
          </Text>
          <View style={styles.EmailBox}>
            <TextInput
              style={styles.TextInput}
              placeholder="enter your email..."
              placeholderTextColor={'gray'}
              autoCapitalize = "none"
              value={email}
              onChangeText={email => setEmail(email)}
            />
          </View>
          <Text
            style={{
              marginLeft: 16,
              fontSize:16,
              marginVertical: 10,
            }}>
            Password
          </Text>
          <View style={[styles.EmailBox,{flexDirection: 'row'}]}>
            <TextInput
              style={styles.TextInput}
              placeholder="enter your pass..."
              placeholderTextColor={'gray'}
              secureTextEntry={hidePass ? true : false}
              value={password}
              onChangeText={pass => setPassword(pass)}
              flex={1}
            />
            <Ionicons
            name={hidePass ? 'eye-off' : 'eye'}
            style={styles.EyeIcon}
            size={20}
            onPress={() => setHidePass(!hidePass)}
          />
          </View>
          <Text
            style={styles.ForgotPass}>
            Forgot your Password?
          </Text>
          <Text
            style={{
              fontSize: 16,
              margin: 10,
              marginHorizontal: 16,
            }}>
            If you are a new user please select any other login option from
            previous page
          </Text>
        </View>
       
        <View style={{flex: 0.6}}>
          <TouchableOpacity
            style={styles.NextBox}>
            <Text style={styles.Next}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EmailLogin;

const styles = StyleSheet.create({
  Icon: {
    alignSelf: 'center',
    marginLeft: 8,
  },
  SettingText: {
    fontSize: 22,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    marginRight: 30,
  },
  Avatar: {
    height: 80,
    width:80,
    borderRadius: 100,
    margin: 16,
  },
  Text: {
    fontSize: 20,
    fontWeight: '600',
    margin: 16,
  },
  TextInput: {
    fontSize: 20,
    fontWeight: '600',
    margin: 10,
  },
  EmailBox: {
    borderWidth:1,
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical: 5,
  },
  NextBox: {
    borderRadius: 10,
    marginHorizontal: 16,
    marginTop: 100,
    backgroundColor: 'green',
  },
  Next: {
    fontSize: 20,
    fontWeight: '600',
    padding: 10,
    textAlign: 'center',
    color: 'white',
  },
  ForgotPass: {
    fontSize: 20,
    fontWeight: '600',
    color: 'green',
    margin: 16,
    textDecorationLine: 'underline',
  },
  EyeIcon: {
    alignSelf: 'center',
    marginRight: 16,
  },
});
