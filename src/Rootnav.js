import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import TodoApp from './TodoApp'
import store from './store'
import { Provider } from 'react-redux'

class Rootnav extends Component {
    render() {
        return (
            <Provider store={store}>
                <TodoApp />

            </Provider>
        );
    }
}
export default Rootnav;

