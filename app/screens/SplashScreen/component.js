import React from 'react';
import {Text, View, Image, TouchableOpacity, Button, ImageBackground} from 'react-native';

class Component extends React.Component {

    render() {
      return (
        <View style={{backgroundColor: '#061F3E', flex:1}}>
             <ImageBackground style={{alignSelf:'center',width:350, height:550}} source={require('../../assets/Landscape.jpg')}> 
                <Image style={{alignSelf:'center',width:150, height:150, marginTop:65}} 
                source={require('../../assets/logopolindra.png')}/>
             </ImageBackground>
        </View>
      );
    }
  }

  export default (Component)

  // NOTE : Floatingin logo polindra, trus tinggal pake di screen pertama
