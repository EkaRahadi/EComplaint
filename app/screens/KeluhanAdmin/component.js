import React from 'react';
import {Text, View, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

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
          {this.props.keluhan.length > 0 ?
            <FlatList
            data={this.props.keluhan}
            keyExtractor={(item, index) => index.toString()}
            renderItem = {({item}) => {
              return (
                  <View style={styles.card}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Tanggapan', {
                      data: item
                    })}>
                      <Text style={styles.status}>Beri Tanggapan</Text>
                    </TouchableOpacity>
                    <Text style={styles.complaints} numberOfLines={1}>{item.keluhan}</Text>
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
      paddingLeft:5,
      height: 55
    },
    complaints:{
      fontSize:12,
      color:'black',
      marginHorizontal:5,
      marginVertical: 5,
    },
    status:{
      color:'#061F3E',
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
