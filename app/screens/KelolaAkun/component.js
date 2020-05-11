import React from 'react';
import {Text, View, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
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
        {username:'elbaayu27', jabatan:'Sarana Prasarana'},
      ]
     
  };
}

    render() {
      return (
        <View style={{backgroundColor: '#C9C9C9', flex:1}}>
          {/* HEADER */}
          <View style={{backgroundColor:'#061F3E', width:'100%', height:60, flexDirection:'row' }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
            >
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
            <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem = {({item}) => {
              return (
                  <View style={styles.card}>
                    <Text style={styles.complaints}>{item.username}</Text>
                    <Text style={{color: '#061F3F'}}>{item.jabatan}</Text>
                    <TouchableOpacity 
                      style={styles.details}
                      onPress={() => this.props.navigation.navigate('DetailKelolaAkun')}
                      >
                    <Text style={{ color: '#061F3E',}}>See Details</Text>
                    </TouchableOpacity>
                  </View>
              );
            }}
            />
        </View>
      );
    }
  }

  export default (Component)

  const styles = StyleSheet.create({
    card:{
      backgroundColor: '#F6F6F6',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.8,
      elevation: 5,
      borderRadius:3,
      marginTop: 15,
      marginHorizontal: 30,
      paddingTop: 5,
      paddingLeft:10,
      paddingBottom: 15
    },
    complaints:{
      color:'#061F3E', 
      fontSize:15,
      fontWeight:'bold', 
      marginBottom: 5
    },
    details:{
      position: 'absolute', 
      right:10, 
      top: 5, 
      fontSize:13
    }
  })

  // NOTE : Floating flatlist
