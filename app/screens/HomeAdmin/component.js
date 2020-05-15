import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

import {logout} from '../../actions/index';

//TopNav
import TopNavigator from '../../Router/TopNavigator';

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
        <View style={{flex: 1, backgroundColor:'#D7D7D7', position: 'relative'}}>
            <View style={{height: 150, backgroundColor:'#061F3E', paddingHorizontal: 10, paddingTop:10, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{ alignItems: 'center'}}>
                    <Text style={{color: '#D6D6D6', fontSize: 15, fontWeight: 'normal', fontFamily: 'Roboto'}}>Selamat Datang di </Text>
                    <Text style={{color: '#D6D6D6', fontSize:15, fontWeight: 'normal'}}>E-Complaint Polindra</Text>
                </View>
                <Image style={{width:65, height:65}} 
                source={require('../../assets/logopolindra.png')}/>
            </View>
            <View style={{flex:1, alignItems: 'center'}}>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
                      <TouchableOpacity style={styles.card}>
                          <Image
                              style={{height:50, width:50}}
                              source={require('../../assets/bachelor.jpg')}
                          />
                          <Text style={{fontFamily: 'RacingSansOne-Regular', fontSize: 15, color: '#061F3E', fontWeight: 'normal'}}>Akademik</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.card}>
                          <Image
                              style={{height:50, width:50}}
                              source={require('../../assets/money.png')}
                          />
                          <Text style={{fontFamily: 'RacingSansOne-Regular', fontSize: 15, color: '#061F3E', fontWeight: 'normal'}}>Keuangan</Text>
                      </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
                    <TouchableOpacity style={styles.card}>
                        <Image
                            style={{height:50, width:50}}
                            source={require('../../assets/chair-removebg-preview.png')}
                        />
                        <Text style={{fontFamily: 'RacingSansOne-Regular', fontSize: 15, color: '#061F3E', fontWeight: 'normal'}}>Sarpras</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card}>
                         <Image
                            style={{height:50, width:50}}
                            source={require('../../assets/teacher.png')}
                        />
                        <Text style={{fontFamily: 'RacingSansOne-Regular', fontSize: 15, color: '#061F3E', fontWeight: 'normal'}}>Tenaga Pengajar</Text>
                    </TouchableOpacity>
               </View>

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
        </View>
        );
    }
}

const styles = StyleSheet.create({
  card : {
    backgroundColor: '#F6F6F6',
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3, },
    shadowOpacity: 0.8,
    elevation: 5,
    height: 90, 
    width:130,
    alignItems: 'center', 
    marginHorizontal: 40,
    borderRadius:3,
    paddingHorizontal:5,
    justifyContent: 'space-between',
    paddingVertical: 10
  }
})

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