import React, {useState, useEffect} from "react";
import {View, Text, TouchableOpacity, FlatList, Header, Alert} from "react-native";
import firebase from "../../config/firebaseConfig";
import styles from  "./style";
import {FontAwesome} from "@expo/vector-icons";

export default function Task({ navigation, route}){

    const [task, setTask] = useState([]);
    
    const database = firebase.firestore();

    function logout(){
        firebase.auth().signOut().then(() => {
            navigation.navigate("Login");
          }).catch((error) => {
              console.log(error);
          });
    }

    function deleteTask(id){
        database.collection(route.params.idUser).doc(id).delete();
    }

    useEffect(() => {
        let listTask = [];
        database.collection(route.params.idUser).onSnapshot((query) => {
            query.forEach((doc) => {
                listTask.push({...doc.data(), id: doc.id});
            })
            setTask(listTask);
        })
    }, []);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity 
                    style={{marginRight:10}} 
                    onPress={() => Alert.alert(
                        'Mensagem',
                        'Deseja realmente sair?',
                        [
                          { text: 'Não', onPress: () => { return null } },
                          { text: 'Sim', onPress: () => { logout() } },
                        ],
                        { cancelable: false }
                      )}>                
                    <FontAwesome name="sign-out" size={25} color="#D9042B"></FontAwesome>
                </TouchableOpacity>
              ),
        });
    });

    return(

        <View style={styles.container}>
            
            <FlatList
               showsVerticalScrollIndicator={false}
               data={task}
               renderItem={({item})=>{
                   return (
                            <View style={styles.tasks}>
                                    <TouchableOpacity 
                                        style={styles.deleteTask} 
                                        onPress={() =>  Alert.alert('Mensagem', 'Deseja realmente sair?',
                                                                        [
                                                                        { text: 'Não', onPress: () => { return null } },
                                                                        { text: 'Sim', onPress: () => { deleteTask(item.id) } },
                                                                        ],
                                                                        { cancelable: false }
                                                                    )}
                                    >
                                        <FontAwesome name="trash" size={34} color="#D9042B"></FontAwesome>
                                    </TouchableOpacity>
                                    <Text 
                                        style={styles.descriptionTask} 
                                        onPress={()=>{
                                            navigation.navigate("Detalhes", {id:item.id, 
                                                                            description: item.description, 
                                                                            idUser: route.params.idUser})
                                        }
                                    }>
                                        {item.description}
                                    </Text>
                            </View>
                        );
               }}
            />

            <TouchableOpacity style={styles.buttonNewTask} onPress={() => navigation.navigate("Nova Tarefa", {idUser: route.params.idUser})}>
                <FontAwesome name="plus" size={20} color="#FFFFFF"></FontAwesome>
            </TouchableOpacity>
        </View>
    );
}