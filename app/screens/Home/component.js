import React from 'react';
import {View, Text, Image, Stylesheet} from 'react-native';

//TopNav
import TopNavigator from '../../Router/TopNavigator';

class Component extends React.Component {

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
            <View style={{position: 'absolute', top:125, width: '100%', height: '81%'}}>
                <TopNavigator/>
            </View>
        </View>
        );
    }
}

export default (Component);