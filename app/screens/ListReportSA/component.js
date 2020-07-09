import React from 'react';
import {Text, View, Image, FlatList, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {connect} from 'react-redux';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import { updateKeluhanStatus } from '../../actions/index';

class Component extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
     isLoading: false
  };
}

_handleAccept = (item) =>  {
  this.setState({
    ...this.state,
    isLoading: true
  })
  const data = {
    ...item,
    status: {
      status: 3
    }
  }
  //isLoading true
  delete data.image;
  this.props.onUpdateStatusKeluhan(data, this.onSuccess, this.onError);
}

_handleDecline = (item) =>  {
  this.setState({
    ...this.state,
    isLoading: true
  })
  const data = {
    ...item,
    status: {
      status: 1
    }
  }
  delete data.image;
  this.props.onUpdateStatusKeluhan(data, this.onSuccess, this.onError);
}

onSuccess = () => {
  console.log('Success Update Keluhan')
  this.setState({
      ...this.state,
      isLoading: false
  })
  this.props.navigation.navigate('HomeSuperAdmin', { screen: 'KelolaKeluhan' });
}

onError = (data) => {
  console.log('Error Update Keluhan')
  this.setState({
      ...this.state,
      isLoading: false
  })
  Alert.alert('Gagal Update Keluhan')
}

    render() {
      return (
        <View style={{backgroundColor: '#C9C9C9', flex:1}}>
          <OrientationLoadingOverlay
            visible={this.state.isLoading}
            color="white"
            indicatorSize="large"
            messageFontSize={24}
            message="Loading..."
          />
          {/* HEADER */}
          <View style={{backgroundColor:'#061F3E', width:'100%', height:60, flexDirection:'row'}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image style={{alignSelf:'center',width:15, height:15, marginTop:20, marginLeft:15, alignSelf:'flex-start'}} 
                  source={require('../../assets/back.png')}/>
            </TouchableOpacity>
            <View style={{flexDirection:'row', marginHorizontal: '25%', justifyContent: 'center', alignItems: 'center'}}>
              <Image style={{alignSelf:'center',width:32, height:32, borderRadius:15}} 
                  source={require('../../assets/list.jpg')}/>
              <View style={{alignSelf:'center', marginLeft:10}}>
                <Text style={{alignSelf:'center', color:'#ffffff', fontSize:15}}>
                  Daftar
                </Text>
                <Text style={{alignSelf:'center', color:'#ffffff', fontSize:15}}>
                  Laporan Keluhan
                </Text>  
              </View>    
            </View>
          </View>

          {/* CONTENT */}
          {this.props.keluhanPending.length > 0 ?
            <FlatList
            data={this.props.keluhanPending}
            keyExtractor={(item, index) => index.toString()}
            renderItem = {({item}) => {
              return (
                  <View style={styles.card}>
                    <View style={{flexDirection:'row', justifyContent: 'flex-end', marginRight:10}}>
                      <TouchableOpacity onPress={() => this._handleAccept(item)}>
                        <Text style={styles.approve}>Approve</Text>
                      </TouchableOpacity>
                      <Text style={styles.devide}> | </Text>
                      <TouchableOpacity onPress={() => this._handleDecline(item)}>
                        <Text style={styles.decline}>Decline</Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.complaints}>{item.keluhan}</Text> 
                  </View>
              );
            }}
            />
            :
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Tidak ada Data</Text>
              </View>
          }
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    card:{
      backgroundColor: 'white',
      marginTop:10,
      marginHorizontal: 20,
      borderRadius:5,
      paddingBottom:5,
      shadowColor: "#000",
      shadowOffset: {
        width: 3,
        height: 3, },
      shadowOpacity: 0.8,
      elevation: 5,
    },
    complaints:{
      fontSize:12,
      color:'black',
      marginHorizontal:5,
      marginVertical: 5
    },
    approve:{
      color:'#061F3E',
      fontSize: 12,
      fontWeight:'bold',
      alignSelf: "flex-end",
      marginTop: 8,
    },
    decline:{
      color:'red',
      fontSize: 12,
      fontWeight:'bold',
      alignSelf: "flex-end",
      marginTop: 8,
    },
    devide:{
      color:'#444444',
      fontSize: 12,
      fontWeight:'bold',
      alignSelf: "flex-end",
      marginTop: 8,
    }
  })

const mapStateToProps = (state) => {
    return {
      user : state.userDetail,
      kategori: state.kategori,
      keluhanPending: state.keluhanPending
    }
}
    
const mapDispatchToProps = (dispatch) => {
    return {
      onUpdateStatusKeluhan: (data, onSuccess, onError) => {
        dispatch(updateKeluhanStatus(data, onSuccess, onError))
      }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Component)

  // NOTE : Floating flatlist
