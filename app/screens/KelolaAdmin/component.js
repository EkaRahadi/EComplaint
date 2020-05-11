import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


class Component extends React.Component {


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
            </View>
        );
    }
}
export default (Component);