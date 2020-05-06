import React from 'react';
import {Text, View, Image, TextInput, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
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
            <View style={{flexDirection:'row', marginLeft:50}}>
              <Image style={{alignSelf:'center',width:32, height:32, marginTop:20, borderRadius:15, marginLeft:20, alignSelf:'flex-start'}} 
                  source={require('../../assets/bachelor.jpg')}/>
              <View style={{alignSelf:'center', marginLeft:10}}>
                <Text style={{alignSelf:'center', color:'#ffffff', fontSize:12}}>
                  Berikan
                </Text>
                <Text style={{alignSelf:'center', color:'#ffffff', fontSize:12}}>
                  Tanggapan
                </Text>  
              </View>    
            </View>
          </View>

          {/* CONTENT */}
          
            <View style={styles.card}>
            <ScrollView>
                <Text style={{color:'grey', fontSize:12, marginTop:10, fontWeight:'100', marginHorizontal:10}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla ligula, eleifend sit amet mauris quis, 
                tristique efficitur ex. Praesent ut vehicula ligula. 
                Nam bibendum, purus eu fringilla vulputate, velit metus eleifend felis, 
                non placerat mi nunc eu quam. Aliquam auctor sapien ac ligula gravida, 
                in tristique leo viverra. Etiam eget cursus diam, sit amet lacinia ex. 
                Sed suscipit purus ac facilisis scelerisque. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Nam vitae rutrum tortor. 
                Nam vitae volutpat nibh. Curabitur sed elit eu erat egestas porttitor eu at turpis. 
                </Text>

                <Text style={{marginTop:20, fontSize:12, fontWeight:'bold', marginLeft:10}}>
                  Tanggapi :
                </Text>

                <View style={styles.textAreaContainer} >
                  <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholder="Type something..."
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                  />
                </View>

                <TouchableOpacity style={{backgroundColor:'#061F3E', width:115, height:30, borderRadius:10, marginTop:20, alignSelf:'center'}}>
                  <Text style={{color:'white', fontSize:12, alignSelf:'center', marginTop:5}}>Kirim Tanggapan</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:'#991B1B', width:80, height:30, borderRadius:10, marginTop:5, alignSelf:'center'}}>
                  <Text style={{color:'white', fontSize:12, alignSelf:'center', marginTop:5}}>Laporkan</Text>
                </TouchableOpacity>

              </ScrollView>
              
            </View>

          

        </View>
      );
    }
  }

  export default (Component)

  const styles = StyleSheet.create({
    card:{
      height:400,
      width:300,
      backgroundColor:'white',
      marginVertical: 3,
      borderRadius:20,
      alignSelf: 'center',
      marginTop:20
    },
    textAreaContainer: {
      borderColor: 'grey',
      borderWidth: 1,
      padding: 5, 
      borderRadius:10,
      width:230,
      alignSelf:'center',
      marginTop:10
    },
    textArea: {
      height: 80,
      justifyContent: "flex-start",
      fontSize:12
    }
  })

  // NOTE : Floating flatlist
