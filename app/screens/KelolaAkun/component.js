import React from 'react';
import {Text, View, Image, FlatList, StyleSheet, ScrollView} from 'react-native';
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
          <View style={{backgroundColor:'#061F3E', width:320, height:60, flexDirection:'row' }}>
            <Image style={{alignSelf:'center',width:15, height:15, marginTop:20, marginLeft:15, alignSelf:'flex-start'}} 
                  source={require('../../assets/back.png')}/>
            <View style={{flexDirection:'row', marginLeft:35}}>
            <Image style={{alignSelf:'center',width:32, height:32, marginTop:20, borderRadius:15, marginLeft:20, alignSelf:'flex-start'}} 
                  source={require('../../assets/admin.png')}/>
              <View style={{alignSelf:'center', marginLeft:10}}>
                <Text style={{alignSelf:'center', color:'#ffffff', fontSize:12}}>
                  Kelola
                </Text>
                <Text style={{alignSelf:'center', color:'#ffffff', fontSize:12}}>
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
              <ScrollView>
                <View style={styles.card}>
                  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{marginLeft:5, color:'#061F3E', fontSize:12, marginTop:8, fontWeight:'bold'}}>{item.username}</Text>
                    <Text style={styles.status}>See Details</Text>
                  </View>
                  <Text style={styles.complaints}>{item.jabatan}</Text>
                </View>
              </ScrollView>
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
      height:45,
      width:300,
      backgroundColor:'white',
      marginVertical: 3,
      borderRadius:5,
      alignSelf: 'center',
      marginTop:10
    },
    complaints:{
      fontSize:10,
      color:'black',
      marginHorizontal:5,
      marginVertical: 5
    },
    status:{
      color:'#061F3E',
      fontSize: 8,
      fontWeight:'200',
      alignSelf: "flex-end",
      marginRight: 10,
      marginTop: 8
    }
  })

  // NOTE : Floating flatlist
