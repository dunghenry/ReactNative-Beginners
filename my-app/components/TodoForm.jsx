import { View, TextInput, Button, Alert, StyleSheet, TouchableHighlight } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
const TodoForm = ({ setTodos }) => {
    const [title, setTitle] = useState('');
    const handleSubmit = async () => {
        if (title) {
            const newTodo = {
                title
            }
            const response = await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);
            if (response.status === 201) {
                Alert.alert("Created todo successfully!")
            }
            setTodos(prev => [...prev, response.data])
            setTitle('')
        }else{
            Alert.alert("Please enter title....")
        }
    }
    return (
        <View style={styles.box}>
            <TextInput
                style={styles.input}
                placeholder="Enter todo..."
                defaultValue={title}
                onChangeText={(text) => setTitle(text)}
            />
            <TouchableHighlight style={styles.box_btn}>
                <Button style={styles.btn} onPress={handleSubmit} title="Add todo" />
            </TouchableHighlight>
        </View>
    )
}
const styles = StyleSheet.create({
    box: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    input: {
        width: 200,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    btn: {
       
        height: 10
    },
    box_btn:{
        marginTop: 14
    }
})
export default TodoForm;