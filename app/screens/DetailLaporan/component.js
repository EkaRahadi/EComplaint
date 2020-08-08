import React from 'react';
import {Text, View, Image, ScrollView, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {connect} from 'react-redux';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import { updateKeluhanStatus } from '../../actions/index';
import { fetchKeluhanStatusPending } from '../../actions/index';
import lodash from 'lodash';

class Component extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
         isLoading: false
      };
    }
    
    _handleAccept = async (item) =>  {
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

      delete data.image;
      await this.props.onUpdateStatusKeluhan(data, this.onSuccessAccept, this.onErrorAccept);
    }
    
    _handleDecline = async (item) =>  {
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
      await this.props.onUpdateStatusKeluhan(data, this.onSuccessDecline, this.onErrorDecline) 
    }

    onSuccessAccept = () => {
     
      console.log('Laporan diterima !')
      this.setState({
          ...this.state,
          isLoading: false
      })
      Alert.alert(
        "Berhasil",
        "Laporan diterima !",
        [
          { text: "OK", onPress: () => this.props.navigation.goBack() }
        ]
      );
    }

    onErrorAccept = (data) => {
      console.log('Gagal Menerima Laporan !')
      this.setState({
          ...this.state,
          isLoading: false
      })
      Alert.alert('Gagal Menerima Laporan !')
    }

    onSuccessDecline = async () => {
      console.log('Laporan ditolak !')
      this.setState({
          ...this.state,
          isLoading: false
      })
      Alert.alert(
        "Berhasil",
        "Laporan ditolak !",
        [
          { text: "OK", onPress: () => this.props.navigation.goBack() }
        ]
      );
    }

    onErrorDecline = (data) => {
      console.log('Gagal Menolak Laporan !')
      this.setState({
          ...this.state,
          isLoading: false
      })
      Alert.alert('Gagal Menolak Laporan !')
    }
    

    onErrorReport = (data) => {
      console.log('Gagal Mengambil Data Laporan !')
      this.setState({
          ...this.state,
          isLoading: false
      })
      Alert.alert('Gagal Mengambil Data Laporan !')
    }

    onSuccessReport = (data) => {
      console.log('Berhasil Mengambil Data Laporan !')
      this.setState({
          ...this.state,
          isLoading: false
      })
      Alert.alert('Berhasil Mengambil Data Laporan !')
    }
    

    render() {
        return(
        <View style={{backgroundColor: '#C9C9C9', flex:1}}>
            <OrientationLoadingOverlay
            visible={this.state.isLoading}
            color="white"
            indicatorSize="large"
            messageFontSize={24}
            message="Loading..."
          />
          {/* HEADER */}
          <View style={{backgroundColor:'#061F3E', width:'100%', height:60, flexDirection:'row' }}>
            <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            >
                <Image style={{alignSelf:'center',width:15, height:15, marginTop:20, marginLeft:15, alignSelf:'flex-start'}} 
                  source={require('../../assets/back.png')}/>
            </TouchableOpacity>
            <View style={{flexDirection:'row', marginHorizontal: '30%', justifyContent: 'center', alignItems: 'center'}}>
              {/* <Image style={{alignSelf:'center',width:32, height:32, borderRadius:15}} 
                  source={require('../../assets/bachelor.jpg')}/> */}
              <View style={{alignSelf:'center', marginLeft:10}}>
                <Text style={{alignSelf:'center', color:'#ffffff', fontSize:15}}>
                  Detail Laporan
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
                  {lodash.upperFirst(this.props.route.params.data.keluhan)}
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
                  <Text style={{color:'#061F3E', fontSize:14, marginHorizontal:10, fontWeight:'bold', fontStyle:'italic'}}>Action :</Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 70, paddingVertical: 15}}>
                    <TouchableOpacity style={{backgroundColor: '#061F3E', paddingVertical: 5, paddingHorizontal: 5, borderRadius: 5}} onPress={() => this._handleAccept(this.props.route.params.data)}>
                        <Text style={styles.approve}>Approve</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'red', paddingVertical: 5, paddingHorizontal: 7, borderRadius: 5}} onPress={() => this._handleDecline(this.props.route.params.data)}>
                        <Text style={styles.decline}>Decline</Text>
                    </TouchableOpacity>
                </View>

              </ScrollView>
              
            </View>

        </View>
        );
    }

}

const styles = StyleSheet.create({
    card:{
      height: '85%',
      backgroundColor: 'white',
      marginBottom: 80,
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
    },
    approve:{
        color:'#FFFFFF',
        fontSize: 17,
        fontWeight:'bold',
        alignSelf: "flex-end",
        // marginTop: 8,
      },
      decline:{
        color:'#FFFFFF',
        fontSize: 17,
        fontWeight:'bold',
        alignSelf: "flex-end",
        // marginTop: 8,
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
      },
      onFetchReport: (onSuccess, onError) => {
        dispatch(fetchKeluhanStatusPending(onSuccess, onError))
    }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Component)