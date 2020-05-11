import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';


class Component extends React.Component {

    _handlePress = () => {
        //Jika super admin maka ke this.props.navigation.navigate('KeluhanSuperAdmin')
        //Jika admin maka ke this.props.navigation.navigate('KeluhanAdmin')
        this.props.navigation.navigate('KeluhanSuperAdmin');
    }
    render() {
        return(
            <View style={{flex:1, backgroundColor: '#D7D7D7'}}>
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
                        onPress={this._handlePress}
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
               onPress={() => this.props.navigation.navigate('Report')}
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

export default (Component);