import React from 'react';
import {Text, View, Image, TouchableOpacity,
StyleSheet, TextInput, Picker, Alert} from 'react-native';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import lodash from 'lodash';
import {connect} from 'react-redux';
import { updatePartialAdmin, updateFullAdmin, deleteAdmin } from '../../actions/index';
import {fetchListAdmin} from '../../actions/index';
 

class Component extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
     selectedValue: this.props.route.params.data.kategori.kategori,
     kategoriId: this.props.route.params.data.kategori.id,
     borderColor: '#FFF',
     textButton: 'Update',
     buttonColor: '#C6752A',
     nama: this.props.route.params.data.nama,
     username: this.props.route.params.data.username,
     nik: this.props.route.params.data.nik,
     jabatan: this.props.route.params.data.jabatan,
     jurusan: this.props.route.params.data.jurusan,
     password: 'password',
     editable: false,
     isLoading: false
  };
}

setSelectedValue = (item) => {
  this.props.kategori.map(value => {
    if(value.kategori === item) {
      this.setState({
        ...this.state,
        selectedValue: item,
        kategoriId: value.id,
        jurusan : item === 'Tenaga Pengajar (Dosen)' ? lodash.kebabCase(this.props.route.params.data.jurusan) : null
      })
    }
  })
};

handleJurusan = (item) => {
  this.setState({
    ...this.state,
    jurusan: lodash.kebabCase(item)
  })
}

onSuccessUpdate = (data) => {
  this.setState({
    ...this.state,
    isLoading: false
  })
  Alert.alert(
    "Berhasil",
    "Berhasil Update Admin",
    [
      { text: "OK", onPress: () => this.props.navigation.goBack() }
    ]
  );
}

onSuccessDelete = (data) => {
  this.setState({
    ...this.state,
    isLoading: false
  })
  Alert.alert(
    "Berhasil",
    "Berhasil Delete Admin",
    [
      { text: "OK", onPress: () => this.props.navigation.goBack() }
    ]
  );
}

onSuccess = (data) => {
  this.setState({
    ...this.state,
    isLoading: false
  })
}

onErrorDelete = (err) => {
  this.setState({
    ...this.state,
    isLoading: false
  })
  Alert.alert("Gagal Menghapus Admin")
  console.log('Error Delete Admin',err)
}

onErrorUpdate = (err) => {
  this.setState({
    ...this.state,
    isLoading: false
  })
  Alert.alert("Gagal Mengupdate Admin")
  console.log('Error Update Admin',err)
}

onError = (err) => {
  this.setState({
    ...this.state,
    isLoading: false
  })
  console.log('Error Fetch Akun',err)
}

_onCancel = () => {
  this.setState({
    ...this.state,
    editable: false,
    textButton: 'Update',
    buttonColor: '#C6752A',
    borderColor: '#FFF',
    password: 'password'
  })
}

_onUpdate = async () => {
  if(this.state.editable === false) {
    this.setState({
      ...this.state,
      textButton: 'Save',
      buttonColor: '#5EBA7D',
      borderColor: '#EFF0F1',
      editable: true,
      password: ''
    })
  }
  else {
    this.setState({
      ...this.state,
      textButton: 'Update',
      buttonColor: '#C6752A',
      borderColor: '#FFF',
      editable: false,
      isLoading: true
    })
    const dataPartial = {
      username: this.state.username,
      nama: this.state.nama,
      nik: this.state.nik,
      jabatan: this.state.jabatan,
      kategori: this.state.kategoriId,
      jurusan: this.state.kategoriId === 4 ? lodash.startCase(this.state.jurusan) : null
    }

    const dataFull = {
      token: this.props.route.params.data.token,
      username: this.state.username,
      nama: this.state.nama,
      nik: this.state.nik,
      jabatan: this.state.jabatan,
      status_admin: "Admin",
      password: this.state.password,
      jurusan: this.state.kategoriId === 4 ? lodash.startCase(this.state.jurusan) : null,
      kategori: {
        kategori:this.state.kategoriId
      }
    }

    const adminId = this.props.route.params.data.id
    // cek password baru apakah masukin password baru ?
    if(this.state.password === '') {
      //dispatch ke action update admin partial
      await this.props.onUpdatePartialAdmin(dataPartial, adminId, this.onSuccessUpdate, this.onErrorUpdate)
    } else {
      //dispatch ke action update keseluruhan (new pass yg perlu di enkrip)
      await this.props.onUpdateFullAdmin(dataFull, adminId, this.onSuccessUpdate, this.onErrorUpdate)
    }
    await this.props.onFetchListAdmin(this.onSuccess, this.onError);
  }
}

_onDelete = async () => {
  this.setState({
    ...this.state,
    isLoading: true
  })
  await this.props.onDeleteAdmin(this.props.route.params.data.id, this.onSuccessDelete, this.onErrorDelete)
  await this.props.onFetchListAdmin(this.onSuccess, this.onError);
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
          <View style={{backgroundColor:'#061F3E', width:'100%', height:60, flexDirection:'row' }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image style={{alignSelf:'center',width:15, height:15, marginTop:20, marginLeft:15, alignSelf:'flex-start'}} 
                  source={require('../../assets/back.png')}/>
            </TouchableOpacity>
            <View style={{flexDirection:'row', marginHorizontal: '25%', justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{alignSelf:'center',width:32, height:32, borderRadius:15}} 
                  source={require('../../assets/admin.png')}/>
              <View style={{alignSelf:'center', marginLeft: 10}}>
                <Text style={{alignSelf:'center', color:'#ffffff', fontSize:15}}>
                  Kelola
                </Text>
                <Text style={{alignSelf:'center', color:'#ffffff', fontSize:15}}>
                  Akun Admin
                </Text>  
              </View>    
            </View>
          </View>

          {/* CONTENT */}
          <View style={styles.card}>
                  <View style={{marginTop: '5%'}}>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: '5%', marginHorizontal: '5%'}}>
                        <Text style={{alignSelf: 'center',fontWeight:'bold', color:'#061F3E', fontSize:15}}>Nama</Text>
                        <Text style={{alignSelf: 'center', marginLeft: '25%',fontWeight:'bold', color:'#061F3E', fontSize:15}}>:</Text>
                        <TextInput 
                        style={{padding:0, borderColor: '#000', 
                        marginLeft: '2%',color:'#444444', 
                        fontSize:13, fontWeight:'100', 
                        backgroundColor: this.state.borderColor, 
                        borderRadius: 2}}
                        onChangeText={(text) => {
                          this.setState({
                            ...this.state,
                            nama: text
                          })
                        }} 
                        editable={this.state.editable}>{this.state.nama}</TextInput>
                    </View>

                    <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: '5%', marginHorizontal: '5%'}}>
                        <Text style={{alignSelf: 'center',fontWeight:'bold', color:'#061F3E', fontSize:15}}>Username</Text>
                        <Text style={{alignSelf: 'center', marginLeft: '16%',fontWeight:'bold', color:'#061F3E', fontSize:15}}>:</Text>
                        <TextInput 
                        style={{padding:0, borderColor: '#000', 
                        marginLeft: '2%',color:'#444444', 
                        fontSize:13, fontWeight:'100', 
                        backgroundColor: this.state.borderColor, 
                        borderRadius: 2}} 
                        onChangeText = {(text) => {
                          this.setState({
                            ...this.state,
                            username: text
                          })
                        }}
                        editable={this.state.editable}>{this.state.username}</TextInput>
                    </View>

                    <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: '5%', marginHorizontal: '5%'}}>
                        <Text style={{alignSelf: 'center',fontWeight:'bold', color:'#061F3E', fontSize:15}}>NIK</Text>
                        <Text style={{alignSelf: 'center', marginLeft: '29.5%',fontWeight:'bold', color:'#061F3E', fontSize:15}}>:</Text>
                        <TextInput 
                        style={{padding:0, borderColor: '#000', 
                        marginLeft: '2%',color:'#444444', 
                        fontSize:13, fontWeight:'100', 
                        backgroundColor: this.state.borderColor, 
                        borderRadius: 2}} 
                        onChangeText={(text) => {
                          this.setState({
                            ...this.state,
                            nik: text
                          })
                        }}
                        editable={this.state.editable}>{this.state.nik}</TextInput>
                    </View>

                    <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: '5%', marginHorizontal: '5%'}}>
                        <Text style={{alignSelf: 'center',fontWeight:'bold', color:'#061F3E', fontSize:15}}>Jabatan</Text>
                        <Text style={{alignSelf: 'center', marginLeft: '20.5%',fontWeight:'bold', color:'#061F3E', fontSize:15}}>:</Text>
                        <TextInput 
                        style={{padding:0, borderColor: '#000', 
                        marginLeft: '2%',color:'#444444', 
                        fontSize:13, fontWeight:'100', 
                        backgroundColor: this.state.borderColor, 
                        borderRadius: 2}}
                        onChangeText = {(text) => {
                          this.setState({
                            ...this.state,
                            jabatan: text
                          })
                        }}
                        editable={this.state.editable}>{this.state.jabatan}</TextInput>
                    </View>

                    <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: '5%', marginHorizontal: '5%'}}>
                        <Text style={{alignSelf: 'center',fontWeight:'bold', color:'#061F3E', fontSize:15}}>Password</Text>
                        <Text style={{alignSelf: 'center', marginLeft: '16.5%',fontWeight:'bold', color:'#061F3E', fontSize:15}}>:</Text>
                        <TextInput 
                        style={{padding:0, borderColor: '#000', 
                        marginLeft: '2%',color:'#444444', 
                        fontSize:13, fontWeight:'100', 
                        backgroundColor: this.state.borderColor, 
                        borderRadius: 2}} 
                        editable={this.state.editable} 
                        onChangeText = {(text) => {
                          this.setState({
                            ...this.state,
                            password: text
                          })
                        }}
                        secureTextEntry={true}>{this.state.password}</TextInput>
                    </View>

                    <View style={{marginTop:25}}>
                        <Text style={{color:'#061F3E', fontSize: 15, marginLeft: '5%', fontWeight: 'bold'}}>
                          Kategori Keluhan
                        </Text>
                        <View style={{
                                  borderColor: '#061F3E',
                                  borderWidth:1,
                                  borderRadius: 5,
                                  marginTop:15,
                                  marginHorizontal: '11%'
                              }}>
                        <Picker
                          enabled={this.state.editable}
                          selectedValue={this.state.selectedValue}
                          style={{height:30, color:'#061F3E', fontSize: 14,}}
                          onValueChange={(itemValue) => this.setSelectedValue(itemValue)}
                        >
                          {this.props.kategori.map((item, index) => {
                              return (<Picker.Item label={item.kategori} value={item.kategori} key={item.id}/>) 
                          })}
                        </Picker>
                        </View>
                    </View>

                  {/* Kategori Jurusan */}
                  {this.state.jurusan !== null ? 
                    <View style={{marginTop:25}}>
                      <Text style={{color:'#061F3E', fontSize: 15, marginLeft: '5%', fontWeight: 'bold'}}>
                        Jurusan
                      </Text>
                      <View style={{
                                borderColor: '#061F3E',
                                borderWidth:1,
                                borderRadius: 5,
                                marginTop:15,
                                marginHorizontal: '11%'
                            }}>
                        <Picker
                          enabled={this.state.editable}
                          selectedValue={lodash.kebabCase(this.state.jurusan)}
                          style={{height:30, color:'#061F3E', fontSize: 14,}}
                          onValueChange={(itemValue) => this.handleJurusan(itemValue)}
                        >
                          <Picker.Item label="Teknik Informatika" value="teknik-informatika" />
                          <Picker.Item label="Teknik Mesin" value="teknik-mesin" />
                          <Picker.Item label="Teknik Pendingin Dan Tata Udara" value="teknik-pendingin-dan-tata-udara" />
                          <Picker.Item label="Keperawatan" value="keperawatan" />
                        </Picker>
                      </View>
                    </View>
                    :
                    null
                  }

                    {/* Button */}
                      <View style={{flexDirection:'row', marginTop:30, justifyContent: 'center'}}>
                        <TouchableOpacity 
                        onPress={this._onDelete}
                        style={{backgroundColor:'#991B1B', 
                        height:30, width:60, borderRadius:10}}>
                          <Text style={{color:'#fff', alignSelf:'center', marginTop:5, fontSize:12}}>Delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={this._onUpdate}
                        style={{backgroundColor:this.state.buttonColor, 
                        height:30, width:60, marginLeft:10, 
                        borderRadius:10}}>
                          <Text style={{color:'#fff', alignSelf:'center', marginTop:5, fontSize:12}}>{this.state.textButton}</Text>
                        </TouchableOpacity>
                        {this.state.editable ?
                        <TouchableOpacity 
                        onPress={this._onCancel}
                        style={{backgroundColor:'#0095FF', 
                        height:30, width:60, marginLeft:10, 
                        borderRadius:10}}>
                          <Text style={{color:'#fff', alignSelf:'center', marginTop:5, fontSize:12}}>Cancel</Text>
                        </TouchableOpacity>
                        : null
                        }
                      </View>
                  </View>
          </View>

        </View> //View Container
      );
    }
  }

  const styles = StyleSheet.create({
    card:{
      flex:1,
      backgroundColor: 'white',
      marginTop:25,
      marginHorizontal:'5%',
      paddingBottom: 150,
      borderRadius:15,
      shadowColor: "#000",
      shadowOffset: {
        width: 3,
        height: 3,},
      shadowOpacity: 0.8,
      elevation: 5,
      marginBottom: 25
    },
  })

const mapStateToProps = (state) => {
    return {
      user : state.userDetail,
      kategori: state.kategori
    }
}
    
const mapDispatchToProps = (dispatch) => {
    return {
      onUpdatePartialAdmin: (data, id, onSuccess, onError) => {
        dispatch(updatePartialAdmin(data, id, onSuccess, onError))
      },
      onUpdateFullAdmin: (data, id, onSuccess, onError) => {
        dispatch(updateFullAdmin(data, id, onSuccess, onError))
      },
      onDeleteAdmin: (id, onSuccess, onError) => {
        dispatch(deleteAdmin(id, onSuccess, onError))
      },
      onFetchListAdmin: (onSuccess, onError) => {
        dispatch(fetchListAdmin(onSuccess,onError))
    }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Component)

  // NOTE : Floating flatlist
