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
        {keluhan:'Pelayanan sangat baik hanya tinggal lebih di...', status:'Belum Ditanggapi'},
        {keluhan:'Pelayanan sangat baik hanya tinggal lebih di...', status:'Sudah Ditanggapi'},
        {keluhan:'Pelayanan sangat baik hanya tinggal lebih di...', status:'Reported'}
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
                  source={require('../../assets/list.jpg')}/>
              <View style={{alignSelf:'center', marginLeft:10}}>
                <Text style={{alignSelf:'center', color:'#ffffff', fontSize:12}}>
                  Daftar
                </Text>
                <Text style={{alignSelf:'center', color:'#ffffff', fontSize:12}}>
                  Laporan Keluhan
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
                  <View style={{flexDirection:'row', marginLeft:230}}>
                    <Text style={styles.approve}>Approve</Text>
                    <Text style={styles.devide}> | </Text>
                    <Text style={styles.decline}>Decline</Text>
                  </View>
                  <Text style={styles.complaints}>{item.keluhan}</Text> 
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
    approve:{
      color:'#061F3E',
      fontSize: 8,
      fontWeight:'bold',
      alignSelf: "flex-end",
      marginTop: 8,
    },
    decline:{
      color:'red',
      fontSize: 8,
      fontWeight:'bold',
      alignSelf: "flex-end",
      marginTop: 8,
    },
    devide:{
      color:'#444444',
      fontSize: 8,
      fontWeight:'bold',
      alignSelf: "flex-end",
      marginTop: 8,
    }
  })

  // NOTE : Floating flatlist
