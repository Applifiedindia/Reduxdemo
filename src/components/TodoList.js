import React, { Component } from "react";

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

const TodoList = ({ todos, toggleTodo }) => (
    <View style={{margin:20}}>
        <Text >{todos.length}</Text>

        {/* {todos.map(todo => <TouchableOpacity key={todo.id}>
        <Text style={{ fontSize: 20, color: 'blue', textDecorationLine: todo.complete ? 'line-through' : 'none' }}>
        {todo.text}</Text>
        </TouchableOpacity>)} */}

        {todos.map(todo => <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
            <Text style={{ fontSize: 20, color: 'blue', color: 'black' ,textDecorationLine:todo.completed?'line-through':'none' }}>
                {todo.text}
            </Text>
        </TouchableOpacity>

        )}
    </View>
)
export default TodoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});