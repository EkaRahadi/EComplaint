import React from 'react';
import {Text, View, Image, TextInput, StyleSheet, Picker, ScrollView, TouchableOpacity} from 'react-native';


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

setSelectedValue = (item) => {
  this.setState({
    ...this.state,
    selectedValue: item
  })
};

class Component extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      data : [
        {keluhan:'Pelayanan sangat baik hanya tinggal lebih di...', status:'Belum Ditanggapi'},
        {keluhan:'Pelayanan sangat baik hanya tinggal lebih di...', status:'Sudah Ditanggapi'},
        {keluhan:'Pelayanan sangat baik hanya tinggal lebih di...', status:'Reported'}
      ],
      selectedValue:''
     
  };
}

    render() {
      return (
        <View style={{backgroundColor: '#C9C9C9', flex:1}}>
          {/* HEADER */}
          <View style={{backgroundColor:'#061F3E', width:320, height:60, flexDirection:'row' }}>
            <Image style={{alignSelf:'center',width:15, height:15, marginTop:20, marginLeft:15, alignSelf:'flex-start'}} 
                  source={require('../../assets/back.png')}/>
            <View style={{flexDirection:'row', marginLeft:35}}>
              <Image style={{alignSelf:'center',width:32, height:32, marginTop:20, borderRadius:15, marginLeft:20, alignSelf:'flex-start'}} 
                  source={require('../../assets/admin.png')}/>
              <View style={{alignSelf:'center', marginLeft:10}}>
                <Text style={{alignSelf:'center', color:'#ffffff', fontSize:12}}>
                  Buatkan Akun Admin
                </Text>  
              </View>    
            </View>
          </View>

          {/* CONTENT */}
          <ScrollView>
            <View style={{marginTop:20}}>
                <Text style={{color:'#061F3E', fontSize: 14, marginLeft: 45}}>
                  Username
                </Text>
                <TextInput
                  style={{color:'#061F3E', width:250, alignSelf:'center', fontWeight:'100'}}
                  // placeholder="Username"
                  placeholderTextColor= '#061F3E'
                  underlineColorAndroid= '#061F3E'
                  value={this.state.text}
                  selectionColor='white'
                  onChangeText={text => this.setState({ text })}
                />
            </View>

            <View style={{marginTop:20}}>
                <Text style={{color:'#061F3E', fontSize: 14, marginLeft: 45}}>
                  NIK
                </Text>
                <TextInput
                  style={{color:'#061F3E', width:250, alignSelf:'center', fontWeight:'100'}}
                  // placeholder="Username"
                  placeholderTextColor= '#061F3E'
                  underlineColorAndroid= '#061F3E'
                  value={this.state.text}
                  selectionColor='white'
                  onChangeText={text => this.setState({ text })}
                />
            </View>

            <View style={{marginTop:20}}>
                <Text style={{color:'#061F3E', fontSize: 14, marginLeft: 45}}>
                  Jabatan
                </Text>
                <TextInput
                  style={{color:'#061F3E', width:250, alignSelf:'center', fontWeight:'100'}}
                  // placeholder="Username"
                  placeholderTextColor= '#061F3E'
                  underlineColorAndroid= '#061F3E'
                  value={this.state.text}
                  selectionColor='white'
                  onChangeText={text => this.setState({ text })}
                />
            </View>

            <View style={{marginTop:20}}>
                <Text style={{color:'#061F3E', fontSize: 14, marginLeft: 45}}>
                  Password
                </Text>
                <TextInput
                  style={{color:'#061F3E', width:250, alignSelf:'center', fontWeight:'100'}}
                  // placeholder="Username"
                  placeholderTextColor= '#061F3E'
                  underlineColorAndroid= '#061F3E'
                  value={this.state.text}
                  selectionColor='white'
                  onChangeText={text => this.setState({ text })}
                />
            </View>

            <View style={{marginTop:25}}>
                <Text style={{color:'#061F3E', fontSize: 14, marginLeft: 45}}>
                  Kategori Keluhan
                </Text>
                <View style={{
                          width: 240,
                          borderColor: '#061F3E',
                          borderWidth:0.4,
                          borderRadius: 5,
                          alignSelf: 'center',
                          marginTop:15,
                          height:35
                      }}>
                <Picker
                  selectedValue={this.state.selectedValue}
                  style={{ height: 40, width: 150, marginLeft:45, color:'#061F3E', fontSize: 14}}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                  <Picker.Item label="Keuangan" value="keuangan" />
                  <Picker.Item label="Sarana Prasarana" value="sarpras" />
                  <Picker.Item label="Tenaga Pengajar" value="pengajar" />
                  <Picker.Item label="Akademik" value="js" />
                </Picker>
                </View>
            </View>

            <TouchableOpacity style={{shadowColor:'#fff',backgroundColor:'#061F3E', marginTop:60, height:30, width:100, alignSelf:'center',borderRadius:10,
              elevation:3, shadowOffset:{width:1, height:1}, shadowColor:'#333', shadowOpacity:0.3, shadowRadius:20}}>
              <Text style={{color:'#fff', alignSelf:'center', marginTop:5, fontSize:13}}>Create</Text>
            </TouchableOpacity>
          </ScrollView>

        </View>
      );
    }
  }

  export default (Component)

  const styles = StyleSheet.create({
   
  })

  // NOTE : Floating flatlist
