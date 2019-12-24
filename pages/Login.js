import React,{Component} from 'react';
// import Logo from './src/VNU-UET.jpg';
// import BackgroundImage from './src/BG.jpg';
// import IconUser from './src/user.png';
// import IconLock from './src/lock.png';
import MeIcon from "../icons/MeIcon";
import mePlay from "../icons/icon-pack/mePlay";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { textStyle } from '../styles/textStyle';

class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/sm-01.png')} />
          </View>
          <View style={styles.viewtext}><Text style={styles.title}>SoundMe</Text></View>
        </View>    
        
        <View>
          <View style={styles.formContainer}>
            {/* <View style={styles.inputContainer}>
              
              <TextInput style={styles.input}
                autoCapitalize="none"
                
                autoCorrect={false}
                keyboardType='email-address'
                returnKeyType="next"
                placeholder="MSSV"
                placeholderTextColor='#000' />
            </View> */}
            {/* <View style={styles.inputContainer}>
              
              <TextInput style={styles.input}
                autoCapitalize="none"
                returnKeyType="go"
                ref={(input) => this.passwordInput = input}
                placeholder='Password'
                placeholderTextColor='#000'
                secureTextEntry />
            </View> */}


            <TouchableOpacity 
              onPress={() => this.props.navigation.navigate("AppNavigator")}
              style={styles.buttonFace}
            >
              <MeIcon style={styles.icon} icon={mePlay} size={25} color="blue" />
              <View style={styles.viewtextbutton}><Text style={[textStyle.medium, styles.buttonText]}>Facebook</Text></View>
            </TouchableOpacity>
           
            <TouchableOpacity 
              onPress={() => this.props.navigation.navigate("AppNavigator")}
              style={styles.buttonGoogle}
            >
              <MeIcon style={styles.icon} icon={mePlay} size={25} color="blue" />
              <View style={styles.viewtextbutton}><Text style={styles.buttonText}>Google+</Text></View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("LoginByPhone")}
              style={styles.buttonDt}
            >
              <MeIcon style={styles.icon} icon={mePlay} size={25} color="blue" />
              <View style={styles.viewtextbutton}><Text style={styles.buttonText}>Đăng nhập với SĐT</Text></View>
            </TouchableOpacity>
            
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  logoContainer: {
    height: 300,
  },
  viewtext:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewtextbutton:{
    flex:0.8,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
  logo: {
    position: 'absolute',
    width: 150,
    height: 150,
    //borderColor: 'gray',
    //borderWidth: 0.5,
    alignSelf: 'center',
    top: 160,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    // padding: 30,
    justifyContent:"center",
    alignItems:"center"
  },
  // inputContainer: {
  //   flexDirection: 'row',
  //   height: 50,
  //   backgroundColor: '#FFF',
  //   marginBottom: 10,
  //   padding: 0,
  //   color: '#000',
  //   elevation: 2,
  // },
  icon: {
    padding: 10,
    margin: 5,
  },
  // input: {
  //   height: 50,
  //   width: 300,
  //   fontSize: 18,
  //   fontWeight: '400',
  //   marginLeft: 10,

  // },
  buttonFace: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 45,
    width: 350,
    borderRadius: 30,
    marginTop: 30,
    margin: 3,
  },
  buttonGoogle:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EE0000',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 45,
    width: 350,
    borderRadius: 30,
    margin: 3,
  },
  buttonDt:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff6666',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 45,
    width: 350,
    borderRadius: 30,
    margin: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical:10,
    flex:1
  }
});

export default Login;
