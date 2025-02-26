// App.tsx
import React, { Profiler } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Homec from './src/screens/Home';
import Workouts from './src/screens/Workouts';
import Sport from './src/screens/Sport';
import Profile from './src/screens/Profile';

import Stats from './src/screens/Stats';

import { RootStackParamList } from './src/types';
import { StatusBar } from "react-native";
import { Tabs } from "expo-router";
import { Home, Dumbbell, LineChart, User } from 'lucide-react-native';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        height: 60,
        paddingBottom: 8,
        paddingTop: 8,
      },
      tabBarActiveTintColor: '#FF4757',
      tabBarInactiveTintColor: '#999',
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
      },
      headerShadowVisible: false,
    }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
        name="Inicio"
        component={Homec} />

      <Tab.Screen name="Entrenamientos"
        options={{
          tabBarIcon: ({ color, size }) => <Dumbbell size={size} color={color} />,
        }}
        component={Workouts} />

      <Tab.Screen
        name="Progreso"
        component={Stats}
        options={{
          tabBarIcon: ({ color, size }) => <LineChart size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
        }}
      />
    </Tab.Navigator>

    // <Tabs
    //   screenOptions={{
    //     tabBarStyle: {
    //       backgroundColor: '#fff',
    //       borderTopWidth: 1,
    //       borderTopColor: '#eee',
    //       height: 60,
    //       paddingBottom: 8,
    //       paddingTop: 8,
    //     },
    //     tabBarActiveTintColor: '#FF4757',
    //     tabBarInactiveTintColor: '#999',
    //     headerStyle: {
    //       backgroundColor: '#fff',
    //     },
    //     headerTitleStyle: {
    //       fontWeight: 'bold',
    //       fontSize: 18,
    //     },
    //     headerShadowVisible: false,
    //   }}>
    //   <Tabs.Screen
    //     name="Homec"
    //     options={{
    //       title: 'Home',
    //       tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="workouts"
    //     options={{
    //       title: 'Workouts',
    //       tabBarIcon: ({ color, size }) => <Dumbbell size={size} color={color} />,
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="progress"
    //     options={{
    //       title: 'Progress',
    //       tabBarIcon: ({ color, size }) => <LineChart size={size} color={color} />,
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="profile"
    //     cimzzz
    //     options={{
    //       title: 'Profile',
    //       tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
    //     }}
    //   />
    // </Tabs>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}