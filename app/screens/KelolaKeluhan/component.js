import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import {connect} from 'react-redux';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import { fetchKeluhanKategoriOnSuperAdmin, fetchKeluhanStatusPending } from '../../actions/index';
class Component extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
    }

    _handlePress = (menu) => {
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
        //Dispatch untuk get list keluhan berdasarkan kategori dari parameter menu
        this.props.onFetchKeluhan(id, this.onSuccess, this.onError, null)
        this.props.navigation.navigate('KeluhanSuperAdmin', {
            headerName: menu === 'Akademik' ? 'Akademik' : menu === 'Keuangan' ? 'Keuangan' : menu === 'Sarana Prasarana' ? 'Sarpras' : 'Tenaga Pengajar',
            kategoriId: id 
        });
    }

     _handlePressButton = () => {
        this.setState({
            ...this.state,
            isLoading: true
        })

        //Dispatch untuk getlist keluhan yg statusnya pending
        this.props.onFetchReport(this.onSuccess, this.onError);
        this.props.navigation.navigate('Report')
     }

    onSuccess = (data) => {
        console.log('Success Fetch Keluhan')
        this.setState({
            ...this.state,
            isLoading: false
        })
    }

    onError = (data) => {
        console.log('Error Fetch Keluhan')
        this.setState({
            ...this.state,
            isLoading: false
        })
        Alert.alert('Gagal Mengambil Data Keluhan')
    }
    render() {
        return(
            <View style={{flex:1, backgroundColor: '#D7D7D7'}}>
                <OrientationLoadingOverlay
                visible={this.state.isLoading}
                color="white"
                indicatorSize="large"
                messageFontSize={24}
                message="Loading..."
                />
                {/* Menu */}
               <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
                    <TouchableOpacity
                        style={{
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
                        }}
                        onPress={() => {
                            this._handlePress('Akademik')
                        }}
                    >
                        <Image
                            style={{height:50, width:50}}
                            source={require('../../assets/bachelor.jpg')}
                        />
                        <Text style={{fontFamily: 'RacingSansOne-Regular', fontSize: 15, color: '#061F3E', fontWeight: 'normal'}}>Akademik</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
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
                            borderRadius: 3,
                            paddingHorizontal:5,
                            justifyContent: 'space-between',
                            paddingVertical: 10
                            }}
                            onPress={() => {
                                this._handlePress('Keuangan')
                            }}
                    >
                        <Image
                            style={{height:50, width:50}}
                            source={require('../../assets/money.png')}
                        />
                        <Text style={{fontFamily: 'RacingSansOne-Regular', fontSize: 15, color: '#061F3E', fontWeight: 'normal'}}>Keuangan</Text>
                    </TouchableOpacity>
               </View>
               <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
                    <TouchableOpacity
                        style={{
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
                            }}
                            onPress={() => {
                                this._handlePress('Sarana Prasarana')
                            }}
                    >
                        <Image
                            style={{height:50, width:50}}
                            source={require('../../assets/chair-removebg-preview.png')}
                        />
                        <Text style={{fontFamily: 'RacingSansOne-Regular', fontSize: 15, color: '#061F3E', fontWeight: 'normal'}}>Sarpras</Text>
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
                            height: 90, 
                            width:130,
                            alignItems: 'center', 
                            marginHorizontal: 40,
                            borderRadius:3,
                            paddingHorizontal:5,
                            justifyContent: 'space-between',
                            paddingVertical: 10
                        }}
                        onPress={() => {
                            this._handlePress('Tenaga Pengajar (Dosen)')
                        }}
                    >
                         <Image
                            style={{height:50, width:50}}
                            source={require('../../assets/teacher.png')}
                        />
                        <Text style={{fontFamily: 'RacingSansOne-Regular', fontSize: 15, color: '#061F3E', fontWeight: 'normal'}}>Tenaga Pengajar</Text>
                    </TouchableOpacity>
               </View>

               {/* Button */}
               <TouchableOpacity
               onPress={this._handlePressButton}
                style={{
                    alignSelf: 'center',
                    marginTop: 50,
                    backgroundColor: '#F6F6F6',
                    paddingVertical:10,
                    paddingHorizontal: 5,
                    borderRadius: 3,
                    shadowColor: "#000",
                        shadowOffset: {
                            width: 3,
                            height: 3,
                        },
                        shadowOpacity: 0.8,
                        elevation: 5,
                }}
               >
                   <Text style={{fontFamily: 'RacingSansOne-Regular', fontSize: 16, color: '#061F3E', fontWeight: 'normal'}}>Kelola Laporan Keluhan</Text>
               </TouchableOpacity>
               
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      user : state.userDetail,
      kategori: state.kategori
    }
}
    
const mapDispatchToProps = (dispatch) => {
    return {
      onFetchKeluhan: (id, onSuccess, onError, date) => {
          dispatch(fetchKeluhanKategoriOnSuperAdmin(id, onSuccess, onError, date))
      },
      onFetchReport: (onSuccess, onError) => {
          dispatch(fetchKeluhanStatusPending(onSuccess, onError))
      }
  
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Component)