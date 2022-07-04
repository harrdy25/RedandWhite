import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {PersistGate} from 'redux-persist/integration/react';
import Home from "./src/screen/Home";
import Product from "./src/screen/Product";
import SignUp from "./src/screen/SignUp";
import LogIn from "./src/screen/LogIn";
import { configStore } from './src/redux/store';
import { Provider } from "react-redux";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

function TabHandler() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HOME") {
            iconName = focused ? "home-circle" : "home-circle-outline";
          } else if (route.name === "Product") {
            iconName = focused ? "alpha-p-circle" : "alpha-p-circle-outline";
          } else if (route.name === "SignUp") {
            iconName = focused ? "alert-decagram" : "alert-decagram-outline";
          } else if (route.name === "LogIn") {
            iconName = focused ? "heart-circle" : "heart-circle-outline";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "#757575",
      })}
    >
      <Tab.Screen
        name="HOME"
        component={HomeScreenStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="LogIn"
        component={LogIn}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function HomeScreenStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
    </HomeStack.Navigator>
  );
}

const App = () => {
  const {store, persistor} = configStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={TabHandler}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
