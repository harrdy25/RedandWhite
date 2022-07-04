import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "./src/screen/Home";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();


function TabHandler() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HOME') {
            iconName = focused ? 'home-circle' : 'home-circle-outline';
          } else if (route.name === 'ACCOUNT') {
            iconName = focused ? 'account-circle' : 'account-circle-outline';
          } else if (route.name === 'CHAT') {
            iconName = focused ? 'chat-processing' : 'chat-processing-outline';
          } else if (route.name === 'MY ADS') {
            iconName = focused ? 'heart-circle' : 'heart-circle-outline';
          } else if (route.name === 'SELL') {
            (iconName = focused ? 'plus-circle' : 'plus-circle-outline'),
              (size = 40);
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: '#757575',
      })}>
      <Tab.Screen
        name="HOME"
        component={HomeScreenStack}
        options={{headerShown: false}}
      />
      
    </Tab.Navigator>
  );
}

function HomeScreenStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        options={{headerShown: false}}
        component={Home}
      />     
    </HomeStack.Navigator>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabHandler} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
