import React from 'react';
import {Text, View, Image, TextInput, TouchableOpacity, Button} from 'react-native';

class Component extends React.Component {
  state = {
    text: ''
  };
  
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
                value={this.state.text}
                selectionColor='white'
                onChangeText={text => this.setState({ text })}
              />
            </View>

            <View style={{marginTop:20}}>
              <TextInput
                style={{color:'#D6D6D6', width:250, alignSelf:'center'}}
                placeholder="Password"
                placeholderTextColor= '#D6D6D6'
                underlineColorAndroid= '#D6D6D6'
                value={this.state.text}
                selectionColor='white'
                onChangeText={text => this.setState({ text })}
              />
            </View>

            <TouchableOpacity style={{shadowColor:'#fff',backgroundColor:'#444444', marginTop:60, height:30, width:100, alignSelf:'center',borderRadius:15,
              elevation:3, shadowOffset:{width:1, height:1}, shadowColor:'#333', shadowOpacity:0.3, shadowRadius:20}}>
              <Text style={{color:'#fff', alignSelf:'center', marginTop:5}}>Login</Text>
            </TouchableOpacity>
            
        </View>
      );
    }
  }

  export default (Component)

  // NOTE : Floatingin beberapa component
