import React from 'react';
import {connect} from 'react-redux';
import {Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import OneSignal from 'react-native-onesignal'; // Import package from node modules
import AsyncStorage from '@react-native-community/async-storage';

import {login, autoLogin} from '../../actions/index';

class Component extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      isLoading: false,
    }
    this._getUseAcccount();
  }

  _getUseAcccount = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user_account')
      const value = await JSON.parse(jsonValue)
      if(jsonValue !== null) {
        //Dispatch to reducer
        this.props.onAutoLogin(value)
        //Navigate to Home
        if(value.status_admin === 'Admin') {
          this.props.navigation.replace('HomeAdmin')
        }
        else {
          this.props.navigation.replace('HomeSuperAdmin')
        }
        
      }
    } catch(e) {
      // error reading value
      console.log(e)
    }
  }

  onIds = async (device) => {
    console.log('Device info: ', device);
    this._token(device)
  }

  _token = async (device) => {
    console.log('_token', device)
    try {
      await fetch(`https://api.elbaayu.xyz/api-mobile/token/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'token': device.userId,
          'admin': this.props.user.id
        })
      }).then(res => res.json())
      .then(data => {
        if(data.success === true) {
          if(this.props.user.status_admin === 'Admin') {
            this.props.navigation.replace('HomeAdmin')
          }
          else {
            this.props.navigation.replace('HomeSuperAdmin')
          }
        }
      }).catch(err => {
        Alert.alert('Error Server Connection')
      })
    } catch (error) {
      Alert.alert('Error Server Connection')
    }
  }

  onSuccess = async (data) => {
    console.log('onSuccess', )
    //Save To AS for autologin
    try {
      const user_account = JSON.stringify(data)
      await AsyncStorage.setItem('user_account', user_account)
    } catch (e) {
      // saving error
      console.log(e);
    }
    this.setState({
      ...this.state,
      isLoading: false
    })
    // Navigate to Home and Check which home will display ? Admin Home / Super Admin use this.props.navigation.replace('Home')
    OneSignal.addEventListener('ids', this.onIds);
    
}
  onError = (error) => {
    this.setState({
      ...this.state,
      isLoading: false
    })
      console.log('error',error)
    Alert.alert(error.message)

  }

  _login = () => {
    let {username, password} = this.state;
    if (username === '' || password === '') {
      Alert.alert("Mohon isi semua field !");
    } else {
      this.setState({
        ...this.state,
        isLoading: true
      })
      this.props.onLogin({username, password}, this.onSuccess, this.onError)
    }
  }
  
    render() {
      return (
        <View style={{backgroundColor: '#061F3E', flex:1}}>
             <Image style={{alignSelf:'center',width:100, height:100, marginTop:20}} 
               source={require('../../assets/logopolindra.png')}/>

             <Text style={{fontWeight:'100',fontSize:18, color:'#D6D6D6', alignSelf:'center', marginTop:15, fontStyle:'italic'}}>E-Complaint</Text>
             <Text style={{fontWeight:'100',fontSize:18, color:'#D6D6D6', alignSelf:'center', fontStyle:'italic'}}>Politeknik Negeri Indramayu</Text>

             <View style={{marginTop:60}}>
              <TextInput
                style={{color:'#D6D6D6', width:250, alignSelf:'center', fontWeight:'100'}}
                placeholder="Username"
                placeholderTextColor= '#D6D6D6'
                underlineColorAndroid= '#D6D6D6'
                value={this.state.username}
                selectionColor='white'
                onChangeText={text => this.setState({
                  ...this.state,
                  username: text
                })}
              />
            </View>

            <View style={{marginTop:20}}>
              <TextInput
                secureTextEntry={true}
                style={{color:'#D6D6D6', width:250, alignSelf:'center'}}
                placeholder="Password"
                placeholderTextColor= '#D6D6D6'
                underlineColorAndroid= '#D6D6D6'
                value={this.state.password}
                selectionColor='white'
                onChangeText={text => this.setState({
                  ...this.state,
                  password: text
                })}
              />
            </View>

            <TouchableOpacity style={{
              shadowColor:'#fff',backgroundColor:'#444444', 
              marginTop:60, height:30, width:100, alignSelf:'center',
              borderRadius:15,
              elevation:3, shadowOffset:{width:1, height:1}, 
              shadowColor:'#333', shadowOpacity:0.3, 
              shadowRadius:20, marginBottom:10}}
              disabled={this.state.isLoading}
              onPress = {this._login}
              >
              <Text style={{color:'#fff', alignSelf:'center', marginTop:5}}>Login</Text>
            </TouchableOpacity>
            <ActivityIndicator animating={this.state.isLoading} size="large" color="#0000ff" />
        </View>
      );
    }
  }

const mapStateToProps = (state) => {
  return {
    user : state.userDetail
  }
}
  
const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: ({username, password}, onSuccess, onError) => {
      dispatch(login({username, password}, onSuccess, onError));
    },
    onAutoLogin: (user_account) => {
      dispatch(autoLogin(user_account))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)

  // NOTE : Floatingin beberapa component
