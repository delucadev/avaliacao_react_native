import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Task from './src/pages/Task';
import NewTask from './src/pages/NewTask';
import Details from './src/pages/Details';
import Login from './src/pages/Login';
import NewUser from './src/pages/NewUser';
import {FontAwesome} from "@expo/vector-icons";

const Stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Novo Usuario"
          component={NewUser}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Tarefas"
          component={Task}
          options={{
            headerTintColor:"#D9042B",
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="Nova Tarefa"
          component={NewTask}
          options={{
            headerTintColor:"#D9042B"
          }}
        />
        <Stack.Screen
          name="Detalhes"
          component={Details}
          options={{
            headerTintColor:"#D9042B"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}