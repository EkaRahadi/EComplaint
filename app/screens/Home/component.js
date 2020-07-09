import React from 'react';
import {View, Text, Image, Stylesheet} from 'react-native';
import {connect} from 'react-redux';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import {logout, fetchKategori} from '../../actions/index';
//TopNav
import TopNavigator from '../../Router/TopNavigator';

class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    }

    onSuccess = () => {
        console.log('Success Fetch Kategori')
        this.setState({
            ...this.state,
            isLoading: false
        })
    }

    onError = (data) => {
        console.log('Error Fetch Kategori')
        this.setState({
            ...this.state,
            isLoading: false
        })
    }

    componentDidMount() {
        if(this.state.isLoading) {
            this.props.onFetchKategori(this.onSuccess, this.onError)
        }
    }

    render() {
        return(
        <View style={{flex: 1, backgroundColor:'#D7D7D7', position: 'relative'}}>
            <OrientationLoadingOverlay
                visible={this.state.isLoading}
                color="white"
                indicatorSize="large"
                messageFontSize={24}
                message="Loading..."
            />
            <View style={{height: 200, backgroundColor:'#061F3E', paddingHorizontal: 10, paddingTop:10, flexDirection: 'column'}}>
                <Image style={{width:65, height:65}} 
                source={require('../../assets/logopolindra.png')}/>
                <View style={{marginBottom: 20}}>
                    <Text style={{color: '#D6D6D6', fontSize: 15, fontWeight: 'normal', fontFamily: 'Roboto'}}>Selamat Datang di </Text>
                    <Text style={{color: '#D6D6D6', fontSize:15, fontWeight: 'normal'}}>E-Complaint Polindra</Text>
                </View>
            </View>
            <View style={{position: 'absolute', top:175, width: '100%', height: '81%'}}>
                <TopNavigator/>
            </View>
        </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      user : state.userDetail
    }
}
    
const mapDispatchToProps = (dispatch) => {
    return {
      onLogout: () => {
        dispatch(logout());
      },
      onFetchKategori: (onSuccess, onError) => {
          dispatch(fetchKategori(onSuccess,onError))
      }
  
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Component)