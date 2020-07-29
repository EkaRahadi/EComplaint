import React from 'react';
import {Text, View, Image, FlatList, StyleSheet, TouchableOpacity, Alert, PermissionsAndroid} from 'react-native';
import MonthPicker from 'react-native-month-year-picker';
import {connect} from 'react-redux';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import { Button, Menu, Provider } from 'react-native-paper';
import { fetchKeluhanKategoriOnSuperAdmin, fetchKeluhanStatusPending } from '../../actions/index';
import RNFetchBlob from 'rn-fetch-blob';
class Component extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      isPickerDateShow: false,
      date: new Date(),
      isLoading: false,
      visible: false,
      message: 'All Complaints'
  };
}

  onValuePickerChange = (event, date) => {
    this.setState({
      ...this.state,
      isPickerDateShow: false,
      date: date || this.state.date
    })

    //Dispatch untuk get complaint by date dan show loading kalo success 
    //tampilkan data kalau gagal alert complaint by date tsb tidak ada di db
    //Here
    if(date !== undefined) {
      this.setState({
        ...this.state,
        isLoading: true,
        message: this.state.date
      })
      this.props.onFetchKeluhan(this.props.route.params.kategoriId, this.onSuccess, this.onError, date)
    }
  }

  onSuccess = (data) => {
    console.log('Success Fetch Keluhan')
    this.setState({
        ...this.state,
        isLoading: false
      })
  }

  onError = (data) => {
      console.log('Error Fetch Keluhan')
      this.setState({
          ...this.state,
          isLoading: false
      })
      Alert.alert('Gagal Mengambil Data Keluhan')
  }

  _openMenu = () => this.setState({
      ...this.state,
      visible: true 
  });

  _closeMenu = () => this.setState({ 
      ...this.state,
      visible: false 
  });

  _onAllPress = () => {
    this.setState({
      ...this.state,
      visible: false,
      isLoading: true,
      message: 'All Complaints'
    })
    //Dispatch untuk get seluruh complaint
    this.props.onFetchKeluhan(this.props.route.params.kategoriId, this.onSuccess, this.onError, null)
  }

  _onDatePress = () => {
    this.setState({
      ...this.state,
      visible: false,
      isPickerDateShow: true
    })
  }

  _downloadPdf = async () => {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      if (this.state.message === 'All Complaints') {
        //Download PDF full
        const { dirs } = RNFetchBlob.fs;
        RNFetchBlob.config({
          fileCache: true,
          addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          mediaScannable: true,
          title: `LaporanSeluruhKeluhan.pdf`,
          path: `${dirs.DownloadDir}/LaporanSeluruhKeluhan.pdf`,
          },
        })
          .fetch('GET',`https://api.elbaayu.xyz/api-mobile/complaint-pdf/${this.props.route.params.kategoriId}/`, {})
          .then((res) => {
            console.log('The file saved to ', res.path());
          })
          .catch((e) => {
            console.log(e)
          });
      }
      else {
        //Download PDF filter by Month
        const { dirs } = RNFetchBlob.fs;
        RNFetchBlob.config({
          fileCache: true,
          addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          mediaScannable: true,
          title: `LaporanBulananKeluhan.pdf`,
          path: `${dirs.DownloadDir}/LaporanBulananKeluhan.pdf`,
          },
        })
          .fetch('POST',`https://api.elbaayu.xyz/api-mobile/complaint-pdf/${this.props.route.params.kategoriId}/`, {
            body: JSON.stringify({
              date : this.state.date
          })
          })
          .then((res) => {
            console.log('The file saved to ', res.path());
          })
          .catch((e) => {
            console.log(e)
          });
  
      }
    } else {
      Alert.alert('Permission Denied!', 'You need to give storage permission to download the file');
    }
  }

    render() {
      return (
        <Provider>
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
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                  <Image style={{alignSelf:'center',width:15, height:15, marginTop:20, marginLeft:15, alignSelf:'flex-start'}} 
                    source={require('../../assets/back.png')}/>
              </TouchableOpacity>
              <View style={{flexDirection:'row', marginHorizontal: '25%', justifyContent: 'center', alignItems: 'center'}}>
                {/* <Image style={{alignSelf:'center',width:32, height:32, borderRadius:15}} 
                    source={require('../../assets/bachelor.jpg')}/> */}
                <View style={{alignSelf:'center', marginLeft:10}}>
                  <Text style={{alignSelf:'center', color:'#ffffff', fontSize:15}}>
                    Keluhan
                  </Text>
                  <Text style={{alignSelf:'center', color:'#ffffff', fontSize:15}}>
                    Bagian {this.props.route.params.headerName}
                  </Text>  
                </View>    
              </View>
            </View>

            {/* Button Sorting and Download pdf */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={this._downloadPdf}
                disabled={this.props.keluhan.length > 0 ? false : true}
                >
                <Text style={{marginHorizontal: 10, color: '#D6D6D6', fontSize:13}}>Download</Text>
              </TouchableOpacity>
                  <Text style={{alignSelf: 'center'}}>{this.state.message}</Text>
              <Menu
                visible={this.state.visible}
                onDismiss={this._closeMenu}
                anchor={
                  <Button style={[styles.btn, {flex: 1, paddingVertical: 0}]} 
                  uppercase={false} labelStyle={{color: '#D6D6D6', fontSize:13, marginHorizontal: 10}} 
                  onPress={this._openMenu}>Filter by</Button>
                }
              >
                <Menu.Item onPress={this._onAllPress} title="All" />
                <Menu.Item onPress={this._onDatePress} title="Month" />
              </Menu>
            </View>

            {/* Picker Date*/}
            {this.state.isPickerDateShow && (
              <MonthPicker
                onChange={this.onValuePickerChange}
                value={this.state.date}
                minimumDate={new Date(2015, 1)}
                maximumDate={new Date()}
              />
            )}

            {/* CONTENT */}
            {this.props.keluhan.length > 0 ? 
              <FlatList
              data={this.props.keluhan}
              keyExtractor={(item, index) => index.toString()}
              renderItem = {({item}) => {
                return (
                  <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('KomplainTanggapan', {
                    data: item
                  })}
                  >
                      <View style={styles.card}>
                        {item.status.status === 'Belum Ditanggapi' ?
                          <Text style={[styles.status]}>{item.status.status}</Text>
                        :  item.status.status === 'Reported' ?
                          <Text style={[styles.status, {color : '#989898'}]}>{item.status.status}</Text>
                        : <Text style={[styles.status]}>Sudah Ditanggapi</Text>
                        }
                        {/* <Text style={[styles.status, {color : '#A54D4D'}]}>{item.status.status}</Text> */}
                        <Text style={styles.complaints} numberOfLines={1}>{item.keluhan}</Text>
                      </View>
                  </TouchableOpacity>
                );
              }}
              />
              :
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Tidak ada Data</Text>
              </View>
            }
            

          </View>
        </Provider>
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
      height: 55
    },
    complaints:{
      fontSize:13,
      color:'black',
      marginHorizontal:5,
      marginVertical: 5
    },
    status:{
      color:'#47794C',
      fontSize: 12,
      fontWeight:'bold',
      alignSelf: "flex-end",
      marginRight: 10,
      marginTop: 8
    },
    btn: {
      backgroundColor: '#007B99',
      shadowColor: "#000",
      shadowOffset: {
          width: 3,
          height: 3,
      },
      shadowOpacity: 0.8,
      elevation: 5,
      borderRadius:3,
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      // width: '50%',
      paddingVertical: 5,
    }
  })

const mapStateToProps = (state) => {
    return {
      user : state.userDetail,
      kategori: state.kategori,
      keluhan: state.keluhanKategori

    }
}
    
const mapDispatchToProps = (dispatch) => {
    return {
      onFetchKeluhan: (id, onSuccess, onError, date) => {
        dispatch(fetchKeluhanKategoriOnSuperAdmin(id, onSuccess, onError, date))
      },
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Component)
  // NOTE : Floating flatlist
