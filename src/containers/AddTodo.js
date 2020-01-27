import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, TextInput, TouchableOpacity,
} from "react-native";
import {connect} from 'react-redux'
import {addTodo} from '../actions'

class AddTodo extends Component {
    state = {
        text: ''
    }
    addTodo=(text)=>{
        //update redux store 
        //when click on add we can dispatch an action to reducer
        console.log('AddTodo container ',text)
        this.props.dispatch(addTodo(text))
        this.setState({text:''})
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: 20, }}>
                <TextInput
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder='Ex. Create new list'
                    style={{ width: '80%', fontSize: 16, height: 50, backgroundColor: '#EFEFE7', borderWidth: 1, borderColor: '#f2f2e1' }}
                />
                <TouchableOpacity onPress={()=>this.addTodo(this.state.text)}>
                    <Text style={{
                        height: 50, backgroundColor: '#a3e300', borderWidth: 1,
                        fontSize: 16, borderColor: '#f2f2e1', alignSelf: 'center', padding: 10
                    }}>
                        Add
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});