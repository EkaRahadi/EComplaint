import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import {connect} from 'react-redux';

import {logout, fetchKategori, fetchKeluhanKategoriStatusBlmDitanggapi} from '../../actions/index';


class Component extends React.Component {

    constructor(props) {
        super(props) 
            this.state = {
                isLoading: true
            }
    }

    componentDidMount() {
        if(this.state.isLoading) {
            this.props.onFetchKategori(this.onSuccess, this.onError)
        }
    }

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

    _handlePress = async (menu) => {
        this.setState({
            ...this.state,
            isLoading: true
        })

        let id;
        this.props.kategori.map(item => {
            if(item.kategori === menu) {
                id = item.id
            }
        })
        console.log(id)
        //Dispatch untuk fetch data berdasarkan kategori dan statusnya Belum ditanggapi
        this.props.onFetchKeluhanStatusBlmDitanggapi(id, this.onSuccess, this.onError)
        await this.props.navigation.navigate('KeluhanAdmin', {
            headerName: menu === 'Akademik' ? 'Akademik' : menu === 'Keuangan' ? 'Keuangan' : menu === 'Sarana Prasarana' ? 'Sarpras' : 'Tenaga Pengajar'
        })
    }

    onSuccess = (data) => {
        console.log('Success Fetch Kategori / Keluhan Status Belum DiTanggapi')
        this.setState({
            ...this.state,
            isLoading: false
        })
    }

    onError = (data) => {
        console.log('Error Fetch Kategori / Keluhan Status Belum DiTanggapi')
        this.setState({
            ...this.state,
            isLoading: false
        })
    }

    render() {
        return(
        <View style={{flex: 1, backgroundColor:'#D7D7D7', position: 'relative'}}>
            <OrientationLoadingOverlay
                visible={this.state.isLoading}
                color="white"
                indicatorSize="large"
                messageFontSize={24}
                message="Loading..."
            />
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
                      <TouchableOpacity
                      onPress={() => this._handlePress('Akademik')} 
                      disabled={this.props.user.kategori.kategori === 'Akademik' ? false : true} 
                      style={[styles.card, {opacity:this.props.user.kategori.kategori === 'Akademik' ? 1 : 0.4 }]}>
                          <Image
                              style={{height:50, width:50}}
                              source={require('../../assets/bachelor.jpg')}
                          />
                          <Text style={{fontFamily: 'RacingSansOne-Regular', fontSize: 15, color: '#061F3E', fontWeight: 'normal'}}>Akademik</Text>
                      </TouchableOpacity>

                      <TouchableOpacity 
                      onPress={() => this._handlePress('Keuangan')}
                      disabled={this.props.user.kategori.kategori === 'Keuangan' ? false : true} 
                      style={[styles.card, {opacity:this.props.user.kategori.kategori === 'Keuangan' ? 1 : 0.4 }]}>
                          <Image
                              style={{height:50, width:50}}
                              source={require('../../assets/money.png')}
                          />
                          <Text style={{fontFamily: 'RacingSansOne-Regular', fontSize: 15, color: '#061F3E', fontWeight: 'normal'}}>Keuangan</Text>
                      </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
                    <TouchableOpacity 
                    onPress={() => this._handlePress('Sarana Prasarana')}
                    disabled={this.props.user.kategori.kategori === 'Sarana Prasarana' ? false : true} 
                    style={[styles.card, {opacity:this.props.user.kategori.kategori === 'Sarana Prasarana' ? 1 : 0.4 }]}>
                        <Image
                            style={{height:50, width:50}}
                            source={require('../../assets/chair-removebg-preview.png')}
                        />
                        <Text style={{fontFamily: 'RacingSansOne-Regular', fontSize: 15, color: '#061F3E', fontWeight: 'normal'}}>Sarpras</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={() => this._handlePress('Tenaga Pengajar (Dosen)')}
                    disabled={this.props.user.kategori.kategori === 'Tenaga Pengajar (Dosen)' ? false : true} 
                    style={[styles.card, {opacity:this.props.user.kategori.kategori === 'Tenaga Pengajar (Dosen)' ? 1 : 0.4 }]}>
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
    width:140,
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
      user : state.userDetail,
      kategori: state.kategori
    }
  }
    
  const mapDispatchToProps = (dispatch) => {
    return {
      onLogout: () => {
        dispatch(logout());
      },
      onFetchKategori: (onSuccess, onError) => {
          dispatch(fetchKategori(onSuccess,onError))
      },
      onFetchKeluhanStatusBlmDitanggapi: (id, onSuccess, onError) => {
          dispatch(fetchKeluhanKategoriStatusBlmDitanggapi(id, onSuccess, onError))
      }
  
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Component)