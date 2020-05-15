import React from 'react';
import {Text, View, Image, TextInput, StyleSheet, 
Picker, ScrollView, TouchableOpacity, Alert} from 'react-native';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import {connect} from 'react-redux';
import { createAdmin } from '../../actions/index';


class Component extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      selectedValue:this.props.kategori[0].kategori,
      isLoading: false,
      nama: '',
      username: '',
      nik: '',
      jabatan: '',
      password: '',

     
  };
}

  setSelectedValue = (item) => {
    this.setState({
      ...this.state,
      selectedValue: item
    })
  };

  _create = async () => {
    this.setState({
      ...this.state,
      isLoading: true
    })
    let kategoriId;
    if(this.state.nama==='' || this.state.username === '' || this.state.nik === ''
    || this.state.jabatan === '' || this.state.password === '') {
      Alert.alert('Mohon isi semua field !');
    }
    else {
      await this.props.kategori.map(value => {
        if(value.kategori === this.state.selectedValue) {
          kategoriId = value.id
        }
      })
      //Data for create admin
      const data = {
        username: this.state.username,
        nama: this.state.nama,
        nik: this.state.nik,
        jabatan: this.state.jabatan,
        status_admin: 'Admin',
        password: this.state.password,
        token: null,
        kategori: {
          kategori: kategoriId
        }
      }
      //Dispatch untuk create akun
      await this.props.onCreateAdmin(data, this.onSuccess, this.onError)
    }
  }

  onSuccess = (data) => {
    this.setState({
      ...this.state,
      isLoading: false
    })
    Alert.alert(
      "Berhasil",
      "Berhasil membuat admin",
      [
        { text: "OK", onPress: () => this.props.navigation.goBack() }
      ]
    );
  }

  onError = (err) => {
    this.setState({
      ...this.state,
      isLoading: false
    })
    Alert.alert(err.message)
    console.log('Error Create Admin',err)
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
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
            >
                  <Image style={{alignSelf:'center',width:15, height:15, marginTop:20, marginLeft:15, alignSelf:'flex-start'}} 
                  source={require('../../assets/back.png')}/>
            </TouchableOpacity>
            <View style={{flexDirection:'row', marginHorizontal: '20%', justifyContent: 'center', alignItems: 'center'}}>
              <Image style={{alignSelf:'center',width:32, height:32, borderRadius:15}} 
                  source={require('../../assets/admin.png')}/>
              <View style={{alignSelf:'center', marginLeft: 10}}>
                <Text style={{alignSelf:'center', color:'#ffffff', fontSize:15}}>
                  Buatkan Akun Admin
                </Text>  
              </View>    
            </View>
          </View>

          {/* CONTENT */}
          <ScrollView>
            <View style={{marginTop:20}}>
                <Text style={{color:'#061F3E', fontSize: 14, marginLeft: 45}}>
                  Nama
                </Text>
                <TextInput
                  style={{color:'#061F3E', width:'100%', alignSelf:'center', fontWeight:'100', marginHorizontal:'23%'}}
                  placeholderTextColor= '#061F3E'
                  underlineColorAndroid= '#061F3E'
                  value={this.state.nama}
                  selectionColor='white'
                  onChangeText={value => this.setState({
                    ...this.state,
                    nama: value
                  })}
                />
            </View>

            <View style={{marginTop:20}}>
                <Text style={{color:'#061F3E', fontSize: 14, marginLeft: 45}}>
                  Username
                </Text>
                <TextInput
                  style={{color:'#061F3E', width:'100%', alignSelf:'center', fontWeight:'100', marginHorizontal:'23%'}}
                  placeholderTextColor= '#061F3E'
                  underlineColorAndroid= '#061F3E'
                  value={this.state.username}
                  selectionColor='white'
                  onChangeText={value => this.setState({
                    ...this.state,
                    username: value
                  })}
                />
            </View>

            <View style={{marginTop:20}}>
                <Text style={{color:'#061F3E', fontSize: 14, marginLeft: 45}}>
                  NIK
                </Text>
                <TextInput
                  style={{color:'#061F3E', width:'100%', alignSelf:'center', fontWeight:'100', marginHorizontal:'23%'}}
                  placeholderTextColor= '#061F3E'
                  underlineColorAndroid= '#061F3E'
                  value={this.state.nik}
                  selectionColor='white'
                  onChangeText={value => this.setState({
                    ...this.state,
                    nik: value
                  })}
                />
            </View>

            <View style={{marginTop:20}}>
                <Text style={{color:'#061F3E', fontSize: 14, marginLeft: 45}}>
                  Jabatan
                </Text>
                <TextInput
                  style={{color:'#061F3E', width:'100%', alignSelf:'center', fontWeight:'100', marginHorizontal: '23%'}}
                  placeholderTextColor= '#061F3E'
                  underlineColorAndroid= '#061F3E'
                  value={this.state.jabatan}
                  selectionColor='white'
                  onChangeText={value => this.setState({
                    ...this.state,
                    jabatan: value
                  })}
                />
            </View>

            <View style={{marginTop:20}}>
                <Text style={{color:'#061F3E', fontSize: 14, marginLeft: 45}}>
                  Password
                </Text>
                <TextInput
                  secureTextEntry={true}
                  style={{color:'#061F3E', width:'100%', alignSelf:'center', fontWeight:'100', marginHorizontal: '23%'}}
                  placeholderTextColor= '#061F3E'
                  underlineColorAndroid= '#061F3E'
                  value={this.state.password}
                  selectionColor='white'
                  onChangeText={value => this.setState({
                    ...this.state,
                    password: value
                  })}
                />
            </View>

            <View style={{marginTop:25}}>
                <Text style={{color:'#061F3E', fontSize: 14, marginLeft: 45}}>
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
                  selectedValue={this.state.selectedValue}
                  style={{height:30, color:'#061F3E', fontSize: 14,}}
                  onValueChange={(itemValue) => this.setSelectedValue(itemValue)}
                >
                  {/* <Picker.Item label="Keuangan" value="keuangan" />
                  <Picker.Item label="Sarana Prasarana" value="sarpras" />
                  <Picker.Item label="Tenaga Pengajar" value="pengajar" />
                  <Picker.Item label="Akademik" value="js" /> */}
                  {this.props.kategori.map((item, index) => {
                      return (<Picker.Item label={item.kategori} value={item.kategori} key={item.id}/>) 
                  })}
                </Picker>
                </View>
            </View>

            <TouchableOpacity 
              // disabled={this.state.isLoading}
              style={{shadowColor:'#fff',
              backgroundColor:'#061F3E',
              marginTop:60, height:30, width:100, 
              alignSelf:'center',borderRadius:10,
              elevation:3, shadowOffset:{width:1, 
              height:1}, shadowColor:'#333', 
              shadowOpacity:0.3, shadowRadius:20}}
              onPress={this._create}
              >
              <Text style={{color:'#fff', alignSelf:'center', marginTop:5, fontSize:13}}>Create</Text>
            </TouchableOpacity>
          </ScrollView>

        </View>
      );
    }
  }

  const styles = StyleSheet.create({
   
  })

const mapStateToProps = (state) => {
    return {
      user : state.userDetail,
      kategori: state.kategori
    }
}
    
const mapDispatchToProps = (dispatch) => {
    return {
      onCreateAdmin: (data, onSuccess, onError) => {
        dispatch(createAdmin(data, onSuccess, onError))
      }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Component)

  // NOTE : Floating flatlist
