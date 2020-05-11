import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';

renderSeparator = () => {  
  return (  
      <View  
          style={{  
              height: 1,  
              width: "100%",  
              backgroundColor: "#000",  
          }}  
      />  
  );  
};  

class Component extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      data : [
        {username:'elbaayu27', jabatan:'Kasubag Akademik'},
        {username:'elbaayu27', jabatan:'Kasubag Keuangan'},
        {username:'elbaayu27', jabatan:'Sarana Prasarana'}
      ]
     
  };
}

    render() {
      return (
        <View style={{backgroundColor: '#C9C9C9', flex:1}}>
          {/* HEADER */}
          <View style={{backgroundColor:'#061F3E', width:'100%', height:60, flexDirection:'row' }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image style={{alignSelf:'center',width:15, height:15, marginTop:20, marginLeft:15, alignSelf:'flex-start'}} 
                  source={require('../../assets/back.png')}/>
            </TouchableOpacity>
            <View style={{flexDirection:'row', marginHorizontal: '25%', justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{alignSelf:'center',width:32, height:32, borderRadius:15}} 
                  source={require('../../assets/admin.png')}/>
              <View style={{alignSelf:'center', marginLeft: 10}}>
                <Text style={{alignSelf:'center', color:'#ffffff', fontSize:15}}>
                  Kelola
                </Text>
                <Text style={{alignSelf:'center', color:'#ffffff', fontSize:15}}>
                  Akun Admin
                </Text>  
              </View>    
            </View>
          </View>

          {/* CONTENT */}
          <View style={styles.card}>
                  <View style={{flexDirection:'row', justifyContent:'space-between', justifyContent:'flex-start'}}>
                    <View style={{flexDirection:'column', marginTop:40, marginLeft:12}}>
                      <Text style={{fontWeight:'bold', color:'#061F3E', fontSize:12}}>Username</Text>
                      <Text style={{fontWeight:'bold', color:'#061F3E', fontSize:12, marginTop:20}}>NIK</Text>
                      <Text style={{fontWeight:'bold', color:'#061F3E', fontSize:12, marginTop:20}}>Jabatan</Text>
                      <Text style={{fontWeight:'bold', color:'#061F3E', fontSize:12, marginTop:20}}>Password</Text>
                      <Text style={{fontWeight:'bold', color:'#061F3E', fontSize:12, marginTop:20}}>Kategori Keluhan</Text>
                      <Text style={{fontWeight:'bold', color:'#061F3E', fontSize:12, marginTop:20}}>Actions</Text>
                    </View>

                    <View style={{flexDirection:'column', marginTop:40, marginLeft:7}}>
                      <Text style={{fontWeight:'bold', color:'#061F3E', fontSize:12}}>:</Text>
                      <Text style={{fontWeight:'bold', color:'#061F3E', fontSize:12, marginTop:20}}>:</Text>
                      <Text style={{fontWeight:'bold', color:'#061F3E', fontSize:12, marginTop:20}}>:</Text>
                      <Text style={{fontWeight:'bold', color:'#061F3E', fontSize:12, marginTop:20}}>:</Text>
                      <Text style={{fontWeight:'bold', color:'#061F3E', fontSize:12, marginTop:20}}>:</Text>
                      <Text style={{fontWeight:'bold', color:'#061F3E', fontSize:12, marginTop:20}}>:</Text>
                    </View>

                    <View style={{flexDirection:'column', marginTop:40, marginLeft:7}}>
                      <Text style={{color:'#444444', fontSize:12, fontWeight:'100'}}>elbaayu27</Text>
                      <Text style={{color:'#444444', fontSize:12, fontWeight:'100', marginTop:20}}>23114567899</Text>
                      <Text style={{color:'#444444', fontSize:12, fontWeight:'100', marginTop:20}}>Kasubag Akademik</Text>
                      <Text style={{color:'#444444', fontSize:12, fontWeight:'100', marginTop:20}}>********</Text>
                      <Text style={{color:'#444444', fontSize:12, fontWeight:'100', marginTop:20}}>Akademik</Text>
                      <View style={{flexDirection:'row', marginTop:20}}>
                        <TouchableOpacity style={{backgroundColor:'#991B1B', height:30, width:60, borderRadius:10}}>
                          <Text style={{color:'#fff', alignSelf:'center', marginTop:5, fontSize:12}}>Delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:'#C6752A', height:30, width:60, marginLeft:10, borderRadius:10}}>
                          <Text style={{color:'#fff', alignSelf:'center', marginTop:5, fontSize:12}}>Update</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    
                  </View>
                  {/* <Text style={styles.complaints}>{item.jabatan}</Text> */}
                </View>

        </View>
      );
    }
  }

  export default (Component)

  const styles = StyleSheet.create({
    card:{
      backgroundColor: 'white',
      marginTop:25,
      marginHorizontal:50,
      paddingBottom: 150,
      borderRadius:15,
      shadowColor: "#000",
      shadowOffset: {
        width: 3,
        height: 3,},
      shadowOpacity: 0.8,
      elevation: 5,
    },
  })

  // NOTE : Floating flatlist
