import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

import {logout} from '../../actions/index';


class Component extends React.Component {

    _logout = async () => {
        try {
            await AsyncStorage.removeItem('user_account');
            await this.props.onLogout()
            this.props.navigation.replace('Login')
          } catch(e) {
            // remove error
            console.log(e)
        }
    }

    render() {
        return(
            <View style={{flex:1, backgroundColor: '#D7D7D7', alignItems: 'center'}}>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#F6F6F6',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 3,
                            height: 3,
                        },
                        shadowOpacity: 0.8,
                        elevation: 5,
                        borderRadius:3,
                        marginTop: 30,
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '90%',
                        paddingVertical: 5,
                    }}
                    onPress={() => this.props.navigation.navigate('BuatAkun')}
                >
                    <Image 
                        source={require('../../assets/user-group.png')}
                        style={{height:50, width:50, marginHorizontal: 20}}
                    />
                    <Text style={{marginHorizontal: 20, color: '#061F3E', fontFamily: 'RacingSansOne-Regular', fontSize:20}}>Buatkan Akun</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: '#F6F6F6',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 3,
                            height: 3,
                        },
                        shadowOpacity: 0.8,
                        elevation: 5,
                        borderRadius:3,
                        marginTop: 30,
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '90%',
                        paddingVertical: 5,
                    }}
                    onPress={() => this.props.navigation.navigate('KelolaAkun')}
                >
                    <Image 
                        source={require('../../assets/write.png')}
                        style={{height:50, width:50, marginHorizontal: 20}}
                    />
                    <Text style={{marginHorizontal: 20, color: '#061F3E',fontFamily: 'RacingSansOne-Regular', fontSize:20}}>Kelola Akun Admin</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: '#991B1B',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 3,
                            height: 3,
                        },
                        shadowOpacity: 0.8,
                        elevation: 5,
                        borderRadius:3,
                        marginTop: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        width: '50%',
                        paddingVertical: 5,
                    }}
                    onPress={this._logout}
                >
                    <Text style={{marginHorizontal: 20, color: '#D6D6D6',fontFamily: 'RacingSansOne-Regular', fontSize:20}}>Logout</Text>
                </TouchableOpacity>
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
      onLogout: () => {
        dispatch(logout());
      },
  
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Component)