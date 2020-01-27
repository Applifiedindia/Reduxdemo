/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  
} from 'react-native';
import {connect} from 'react-redux'

class CounterApp extends Component {
  

   increaseCounter=()=>{
    this.setState({counter:this.state.counter+1})
  }
  decreaseCounter=()=>{
    this.setState({counter:this.state.counter-1})

  }


  render (){
    return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
    <View style={{flexDirection:'row',width:300,justifyContent:'space-around'}}>
      <TouchableOpacity onPress={()=>this.props.increaseCounter()}>
        <Text style={{fontSize:20}}>Increase</Text>
      </TouchableOpacity>
      <Text style={{fontSize:20}}>{this.props.counter}</Text>

      <TouchableOpacity onPress={()=>this.props.decreaseCounter()}>
        <Text style={{fontSize:20}}>Decrease</Text>
      </TouchableOpacity>
    </View>
    </View>
    )
  }
};

function mapToProps(state){
    return{
        counter:state.counter
    }
}
function mapDispatchToProps(dispatch){
    return{
        increaseCounter:()=>dispatch({type:'INCREASE_COUNTER'}),
        decreaseCounter:()=>dispatch({type:'DECREASE_COUNTER'})
    }
}
export default connect(mapToProps,mapDispatchToProps)(CounterApp);
const styles = StyleSheet.create({
  
});

