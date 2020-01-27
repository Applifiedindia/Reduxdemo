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
import CounterApp from './src/CounterApp'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const initialState={
  counter:0
}


const reducer=(state=initialState,action)=>{
  switch(action.type)
  {
    case 'INCREASE_COUNTER':
    return{counter:state.counter+1}
    case 'DECREASE_COUNTER':
    return{
      counter:state.counter-1
    }

  }
    return state;
}

const store=createStore(reducer)


class App extends Component {
 

  render (){
    return (
      <Provider store={store}>
              <CounterApp/>

      </Provider>
    )
  }
};
export default App;
const styles = StyleSheet.create({
  
});

