import React,{useState} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import firebase from "../../config/firebaseConfig";
import styles from "./style";
import {FontAwesome} from "@expo/vector-icons";

export default function Details({navigation, route}){
    
    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description);
    const idTask = route.params.id;

    const database = firebase.firestore();
    
    function editTask(description, id){
        database.collection(route.params.idUser).doc(id).update({
            description: description
        });
        navigation.navigate("Tarefas", {idUser: route.params.idUser})
    }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Descrição:</Text>
            <TextInput
                style = {styles.input}
                placeholder = "Ex.: Fazer as compras"
                onChangeText = {setDescriptionEdit}
                value={descriptionEdit}
            />
            <TouchableOpacity
                style={styles.btnNewTask}
                onPress={()=>{
                    editTask(descriptionEdit, idTask)
                }}
            >                
                <FontAwesome name="save" size={25} color="#FFFFFF"></FontAwesome>
            </TouchableOpacity>
        </View>
    );
}