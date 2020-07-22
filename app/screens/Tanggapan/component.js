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

_handleTanggapanButton = () => {
  if (this.state.tanggapan !== '') {
    this.setState({
      ...this.state,
      isLoading: true
    })
    data = {
      ...this.props.route.params.data,
      status: {
        status: 2
      },
      kategori: {
        kategori: this.props.route.params.data.kategori.id
      },
      tanggapan: this.state.tanggapan
    }
    //Dispatch untuk update tanggapan dan status keluhan
    delete data.image;
    this.props.onTanggapanLaporkanKeluhan(data, this.onSuccess, this.onError)
  } else {
    Alert.alert("Field Tanggapan tidak boleh kosong !")
  }
}

_handleLaporkanButton = () => {
  this.setState({
    ...this.state,
    isLoading: true
  })
  data = {
    ...this.props.route.params.data,
    status: {
      status: 4
    },
    kategori: {
      kategori: this.props.route.params.data.kategori.id
    },
  }

  //Dispatch untuk update tanggapan dan status keluhan
  delete data.image;
  this.props.onTanggapanLaporkanKeluhan(data, this.onSuccess, this.onError)
}

onSuccess = (data) => {
  console.log('Success Update Keluhan')
  this.setState({
      ...this.state,
      isLoading: false
  })
  //Navigate To this.props.navigation.navigate('HomeAdmin')
  Alert.alert(
    "Berhasil",
    "Action Berhasil Dilakukan",
    [
      { text: "OK", onPress: () => this.props.navigation.navigate('HomeAdmin') }
    ],
    { cancelable: false }
  );
}

onError = (data) => {
  console.log('Error Update Keluhan')
  this.setState({
      ...this.state,
      isLoading: false
  })
  Alert.alert('Action Failed !')
}

    render() {
      return (
        <View style={{backgroundColor: '#C9C9C9', flex:1, paddingBottom: 60}}>
          <OrientationLoadingOverlay
                visible={this.state.isLoading}
                color="white"
                indicatorSize="large"
                messageFontSize={24}
                message="Loading..."
            />
          {/* HEADER */}
          <View style={{backgroundColor:'#061F3E', width:'100%', height:60, flexDirection:'row' }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image style={{alignSelf:'center',width:15, height:15, marginTop:20, marginLeft:15, alignSelf:'flex-start'}} 
                  source={require('../../assets/back.png')}/>
            </TouchableOpacity>
            <View style={{flexDirection:'row', marginHorizontal: '25%', justifyContent: 'center', alignItems: 'center'}}>
              <Image style={{alignSelf:'center',width:32, height:32, borderRadius:15}} 
                  source={require('../../assets/bachelor.jpg')}/>
              <View style={{alignSelf:'center', marginLeft:10}}>
                <Text style={{alignSelf:'center', color:'#ffffff', fontSize:15}}>
                  Berikan
                </Text>
                <Text style={{alignSelf:'center', color:'#ffffff', fontSize:15}}>
                  Tanggapan
                </Text>  
              </View>    
            </View>
          </View>

          {/* CONTENT */}
          
            <View style={styles.card}>
            <ScrollView>
                <Text style={{marginTop:10, fontSize:12, fontWeight:'bold', marginLeft:10}}>
                  Keluhan :
                </Text>
                <Text style={{color:'grey', fontSize:14, marginTop:10, fontWeight:'100', marginHorizontal:10}}>
                  {this.props.route.params.data.keluhan}
                </Text>

                
                {this.props.route.params.data.image !== null && 
                <View>
                  <Text style={{marginTop:10, fontSize:12, fontWeight:'bold', marginLeft:10}}>
                    Data Pendukung :
                  </Text>
                  <Image
                  style={{width: '95%', height: 300, marginVertical: 10, alignSelf: 'center'}}
                  source={{uri: 'https://api.elbaayu.xyz'+this.props.route.params.data.image}}
                  />
                </View>
                }

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
                    onChangeText={(text) => {
                      this.setState({
                        ...this.state,
                        tanggapan: text
                      })
                    }}
                  />
                </View>

                <TouchableOpacity 
                  onPress={this._handleTanggapanButton}
                  style={{backgroundColor:'#061F3E', width:115,
                  height:30, borderRadius:10, marginTop:20, 
                  alignSelf:'center'}}>
                  <Text style={{color:'white', fontSize:12, alignSelf:'center', marginTop:5}}>Kirim Tanggapan</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  onPress={this._handleLaporkanButton}
                  style={{backgroundColor:'#991B1B', width:80, 
                  height:30, borderRadius:10, marginTop:5, 
                  alignSelf:'center'}}>
                  <Text style={{color:'white', fontSize:12, alignSelf:'center', marginTop:5}}>Laporkan</Text>
                </TouchableOpacity>

              </ScrollView>
              
            </View>

          

        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    card:{
      paddingHorizontal: 5,
      paddingVertical: 5,
      marginBottom: 30,
      backgroundColor: 'white',
      marginTop:30,
      marginHorizontal: 40,
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
