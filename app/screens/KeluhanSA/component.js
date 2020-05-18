import React from 'react';
import {Text, View, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import { fetchKeluhanKategoriOnSuperAdmin } from '../../actions/index';
class Component extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
  };
}

    render() {
      return (
        <View style={{backgroundColor: '#C9C9C9', flex:1}}>
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

          {/* CONTENT */}
          <FlatList
          data={this.props.keluhan}
          keyExtractor={(item, index) => index.toString()}
          renderItem = {({item}) => {
            return (
                <View style={styles.card}>
                  {item.status.status === 'Belum Ditanggapi' ?
                    <Text style={[styles.status]}>{item.status.status}</Text>
                  :  item.status.status === 'Reported' ?
                    <Text style={[styles.status, {color : '#989898'}]}>{item.status.status}</Text>
                  : <Text style={[styles.status]}>Sudah Ditanggapi</Text>
                  }
                  {/* <Text style={[styles.status, {color : '#A54D4D'}]}>{item.status.status}</Text> */}
                  <Text style={styles.complaints}>{item.keluhan}</Text>
                </View>
            );
          }}
          />

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
  
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Component)
  // NOTE : Floating flatlist
