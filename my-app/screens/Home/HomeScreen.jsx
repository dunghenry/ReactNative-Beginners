import {
    Text,
    View,
    Button,
    StyleSheet,
    TouchableHighlight,
    FlatList,
} from "react-native";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import TodoItem from "../../components/TodoItem";
import TodoForm from '../../components/TodoForm';
const HomeScreen = ({ navigation }) => {
    const [todos, setTodos] = useState([{ id: 1, title: "Hehe" }]);
    useEffect(() => {
        async function fetchData(){
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5");
            if(response.data){
                setTodos(response.data)
            }
        }
        fetchData()
    }, []);
    const handleClick = () => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => console.log(json));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Home Page </Text>
            <Text style={styles.text}> Todos App use React Native </Text>
            {/* <TouchableHighlight style={styles.button}>
                <Button title="Fetch data!" onPress={() => handleClick()} />
            </TouchableHighlight> */}
            <TodoForm todos={todos} setTodos={setTodos}/>
            <FlatList
                data={todos}
                renderItem={({ item }) => <TodoItem todo={item} todos={todos} setTodos={setTodos} />}
                keyExtractor={todo => todo.id}
            />
            <TouchableHighlight style={styles.buttonPage}>
                <Button
                    title="Go to About Page"
                    onPress={() => navigation.navigate("About")}
                />
            </TouchableHighlight>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 30,
    },
    text: {
        fontSize: 25,
        marginTop: 10,
        color: "red",
    },
    button: {
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonPage: {
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 5,
        marginBottom: 20,
        position: "absolute",
        bottom: 0,
    },
});
export default HomeScreen;
