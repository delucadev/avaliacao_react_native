import React, {useState} from "react";
import {View, Text, TouchableOpacity, TextInput} from "react-native";
import firebase from "../../config/firebaseConfig";
import styles from "./style";
import {FontAwesome} from "@expo/vector-icons";

export default function NewTask({navigation, route}){
    
    const  [description, setDescription] = useState(null);
    
    const database = firebase.firestore();

    function addTask(){
        database.collection(route.params.idUser).add({
            description: description,
            status: false
        });
        navigation.navigate('Tarefas', {idUser: route.params.idUser})
        
    }
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Descrição:</Text>
            <TextInput
                style = {styles.input}
                placeholder = "Ex.: Fazer as compras"
                onChangeText = {setDescription}
                value={description}
            />
            <TouchableOpacity
                style={styles.btnNewTask}
                onPress={()=>{
                    addTask()
                }}
            >                
                <FontAwesome name="save" size={25} color="#FFFFFF"></FontAwesome>
            </TouchableOpacity>
        </View>
    );
}