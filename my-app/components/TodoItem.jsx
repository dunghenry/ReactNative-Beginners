import React from 'react'
import { View, Text, Alert, Button, StyleSheet, TouchableHighlight } from 'react-native';
import axios from 'axios'
const TodoItem = ({ todo, todos, setTodos }) => {
    const handleDelete = async (id) => {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        if (response.status === 200) {
            Alert.alert('Deleted todo from backend successfully');
        }
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos)
    }
    return (
        <View style={styles.box}>
            <Text style={styles.text}>{todo.title}</Text>
            <TouchableHighlight styles={styles.box_btn}>
                <Button color="red" style={styles.btn} onPress={() => handleDelete(todo.id)} title="Delete" />
            </TouchableHighlight>

        </View>
    )
}
const styles = StyleSheet.create({
    box: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 10
    },
    text: {
        fontWeight: 'bold',
        marginTop: 5,
        marginRight: 20,
        fontSize: 20,
        width: 280
    },
    btn: {
        borderRadius: 5,
        cursor: 'pointer',
        height: 20,
    },
    box_btn: {
        height: 20
    }
})
export default TodoItem