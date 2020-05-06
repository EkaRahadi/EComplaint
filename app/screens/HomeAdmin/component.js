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
          <View style={{backgroundColor:'#061F3E', width:320, height:150, flexDirection:'row' }}>
            <View style={{flexDirection:"column"}}>
              <Image style={{alignSelf:'center',width:65, height:65, marginTop:20, marginLeft:25, alignSelf:'flex-start'}} 
                    source={require('../../assets/logopolindra.png')}/>
              <View style={{alignSelf:'center', marginLeft:5, marginTop:15}}>
                  <Text style={{alignSelf:'center', color:'#ffffff', fontSize:12}}>
                    Selamat Datang di
                  </Text>
                  <Text style={{alignSelf:'center', color:'#ffffff', fontSize:12}}>
                    E-Complaint Polindra
                  </Text>  
              </View>  
            </View>

            <Image style={{alignSelf:'center',width:17, height:17, marginTop:20, marginLeft:170, alignSelf:'flex-start', transform:[{rotate:'40deg'}], }} 
                    source={require('../../assets/notify.png')}/>
          </View>

          {/* CONTENT */}
          <View style={styles.card}>
            <Image style={{alignSelf:'flex-start',width:50, height:50}} 
                      source={require('../../assets/bachelor.jpg')}/>
            <View style={{flexDirection:'column', justifyContent:'center', marginLeft:10}}>
              <Text style={{color:'#061F3E', fontSize:11, fontStyle:'italic'}}>Cek Keluhan</Text>  
              <Text style={{color:'#061F3E', fontSize:11, fontStyle:'italic'}}>Perihal Bagian Akademik</Text>
            </View>
          </View>

        </View>
      );
    }
  }

  export default (Component)

  const styles = StyleSheet.create({
    card:{
      height:45,
      width:250,
      backgroundColor:'white',
      marginVertical: 3,
      borderRadius:5,
      alignSelf: 'center',
      marginTop:120, 
      flexDirection:"row"

    }
  })

  // NOTE : Floating flatlist
