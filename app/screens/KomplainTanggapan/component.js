import React from 'react';
import {Text, View, Image, TextInput, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import {connect} from 'react-redux';

import { tanggapanLaporkanKeluhan } from '../../actions/index';

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
            <View style={{flexDirection:'row', marginHorizontal: '30%', justifyContent: 'center', alignItems: 'center'}}>
              <Image style={{alignSelf:'center',width:32, height:32, borderRadius:15}} 
                  source={require('../../assets/bachelor.jpg')}/>
              <View style={{alignSelf:'center', marginLeft:10}}>
                <Text style={{alignSelf:'center', color:'#ffffff', fontSize:15}}>
                  Detail
                </Text>
                <Text style={{alignSelf:'center', color:'#ffffff', fontSize:15}}>
                  Keluhan
                </Text>  
              </View>    
            </View>
          </View>

          {/* CONTENT */}
          
            <View style={styles.card}>
            <ScrollView>
                <View style={{backgroundColor:'#adadad', height:20, marginTop:25}}>
                  <Text style={{color:'#061F3E', fontSize:14, marginHorizontal:10, fontWeight:'bold', fontStyle:'italic'}}>Keluhan :</Text>
                </View>

                <Text style={{color:'grey', fontSize:14, marginTop:10, marginHorizontal:10}}>
                  {this.props.route.params.data.keluhan}
                </Text>

                {this.props.route.params.data.image !== null && 
                <View style={{backgroundColor:'#adadad', marginTop:25}}>
                  <Text style={{color:'#061F3E', fontSize:14, marginHorizontal:10, fontWeight:'bold', fontStyle:'italic'}}>
                   Data dukung :
                   </Text>
                </View>
                }
                {this.props.route.params.data.image !== null && 
                <Image
                style={{width: '95%', height: 300, alignSelf: 'center', marginTop: 10}}
                source={{uri: 'https://api.elbaayu.xyz'+this.props.route.params.data.image}}
                />
                }

                <View style={{backgroundColor:'#adadad', height:20, marginTop:25}}>
                  <Text style={{color:'#061F3E', fontSize:14, marginHorizontal:10, fontWeight:'bold', fontStyle:'italic'}}>Tanggapan :</Text>
                </View>
                
                {this.props.route.params.data.status.status === 'Reported' ?
                <Text style={{color:'grey', fontSize:14, marginTop:10, marginHorizontal:10}}>
                  Complaint Reported
                </Text>
                 : this.props.route.params.data.status.status === 'Belum Ditanggapi' ? 
                <Text style={{color:'grey', fontSize:14, marginTop:10, marginHorizontal:10}}>
                 Belum Ditanggapi
                </Text>
               : 
                <Text style={{color:'grey', fontSize:14, marginTop:10, marginHorizontal:10}}>
                  {this.props.route.params.data.tanggapan}
                </Text>}

              </ScrollView>
              
            </View>

          

        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    card:{
      height:400,
      // width:300,
      // backgroundColor:'white',
      // marginVertical: 3,
      // borderRadius:20,
      // alignSelf: 'center',
      backgroundColor: 'white',
      marginTop:20,
      marginHorizontal: 20,
      borderRadius:15,
      paddingBottom:5,
      shadowColor: "#000",
      shadowOffset: {
        width: 3,
        height: 3, },
      shadowOpacity: 0.8,
      elevation: 5,
    },
    textAreaContainer: {
      borderColor: 'grey',
      borderWidth: 1,
      padding: 5, 
      borderRadius:10,
      width:230,
      alignSelf:'center',
      marginTop:10,
    },
    textArea: {
      height: 80,
      justifyContent: "flex-start",
      fontSize:14,
    }
  })

  const mapStateToProps = (state) => {
    return {
      user : state.userDetail,
      kategori: state.kategori
    }
  }
    
  const mapDispatchToProps = (dispatch) => {
    return {
      onTanggapanLaporkanKeluhan: (data, onSuccess, onError) => {
        dispatch(tanggapanLaporkanKeluhan(data, onSuccess, onError))
      }
  
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Component)

  // NOTE : Floating flatlist
