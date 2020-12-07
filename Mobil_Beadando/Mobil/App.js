import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "./src/HomeScreen";
import DataScreen from "./src/DataScreen";
import AboutScreen from "./src/AboutScreen";
import GameScreen from "./src/GameScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <>
          <Drawer.Screen
            name = "Home"
            component = { HomeScreen }
            options = {{
              title: 'Kezdőlap'
            }}
          />
          <Drawer.Screen
            name="Data"
            component={ DataScreen }
            options = {{
              title: 'Tudástár'
            }}
          />
          <Drawer.Screen
            name="Game"
            component={ GameScreen }
            options = {{
              title: 'Játék'
            }}
          />
          <Drawer.Screen
            name="About"
            component={ AboutScreen }
            options = {{
              title: 'About'
            }}
          />
        </>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}