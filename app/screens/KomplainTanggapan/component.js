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
  constructor(props) {
    super(props); 
    this.state = {
     tanggapan: '',
     isLoading: false
  };
}

// _handleTanggapanButton = () => {
//   this.setState({
//     ...this.state,
//     isLoading: true
//   })
//   data = {
//     ...this.props.route.params.data,
//     status: {
//       status: 2
//     },
//     kategori: {
//       kategori: this.props.route.params.data.kategori.id
//     },
//     tanggapan: this.state.tanggapan
//   }
//   //Dispatch untuk update tanggapan dan status keluhan
//   this.props.onTanggapanLaporkanKeluhan(data, this.onSuccess, this.onError)
// }

// _handleLaporkanButton = () => {
//   this.setState({
//     ...this.state,
//     isLoading: true
//   })
//   data = {
//     ...this.props.route.params.data,
//     status: {
//       status: 4
//     },
//     kategori: {
//       kategori: this.props.route.params.data.kategori.id
//     },
//   }

//   //Dispatch untuk update tanggapan dan status keluhan
//   this.props.onTanggapanLaporkanKeluhan(data, this.onSuccess, this.onError)
// }

// onSuccess = (data) => {
//   console.log('Success Update Keluhan')
//   this.setState({
//       ...this.state,
//       isLoading: false
//   })
//   //Navigate To this.props.navigation.navigate('HomeAdmin')
//   Alert.alert(
//     "Berhasil",
//     "Action Berhasil Dilakukan",
//     [
//       { text: "OK", onPress: () => this.props.navigation.navigate('HomeAdmin') }
//     ],
//     { cancelable: false }
//   );
// }

// onError = (data) => {
//   console.log('Error Update Keluhan')
//   this.setState({
//       ...this.state,
//       isLoading: false
//   })
//   Alert.alert('Action Failed !')
// }

    render() {
      return (
        <View style={{backgroundColor: '#C9C9C9', flex:1}}>
          {/* <OrientationLoadingOverlay
                visible={this.state.isLoading}
                color="white"
                indicatorSize="large"
                messageFontSize={24}
                message="Loading..."
            /> */}
          {/* HEADER */}
          <View style={{backgroundColor:'#061F3E', width:'100%', height:60, flexDirection:'row' }}>
            <TouchableOpacity>
                <Image style={{alignSelf:'center',width:15, height:15, marginTop:20, marginLeft:15, alignSelf:'flex-start'}} 
                  source={require('../../assets/back.png')}/>
            </TouchableOpacity>
            <View style={{flexDirection:'row', marginHorizontal: '25%', justifyContent: 'center', alignItems: 'center'}}>
              <Image style={{alignSelf:'center',width:32, height:32, borderRadius:15}} 
                  source={require('../../assets/bachelor.jpg')}/>
              <View style={{alignSelf:'center', marginLeft:10}}>
                <Text style={{alignSelf:'center', color:'#ffffff', fontSize:15}}>
                  Keluhan
                </Text>
                <Text style={{alignSelf:'center', color:'#ffffff', fontSize:15}}>
                  Bagian ____
                </Text>  
              </View>    
            </View>
          </View>

          {/* CONTENT */}
          
            <View style={styles.card}>
            <ScrollView>
                <View style={{backgroundColor:'#adadad', width:300, height:20, marginTop:25}}>
                  <Text style={{color:'#061F3E', fontSize:14, marginHorizontal:10, fontWeight:'bold', fontStyle:'italic'}}>Keluhan :</Text>
                </View>

                <Text style={{color:'grey', fontSize:14, marginTop:10, marginHorizontal:10}}>
                  Isinya Keluhan
                </Text>

                <View style={{backgroundColor:'#adadad', width:300, height:20, marginTop:125}}>
                  <Text style={{color:'#061F3E', fontSize:14, marginHorizontal:10, fontWeight:'bold', fontStyle:'italic'}}>Tanggapan :</Text>
                </View>

                <Text style={{color:'grey', fontSize:14, marginTop:10, marginHorizontal:10}}>
                  Isinya Tanggapan
                </Text>

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
