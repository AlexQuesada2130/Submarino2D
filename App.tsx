import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ConfigurationScreen from "./screens/ConfigurationScreen";
import GameScreen from "./screens/GameScreen";
import MovementList from "./screens/MovementList";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName:
              | "boat-outline"
              | "boat"
              | "build-outline"
              | "build"
              | "bookmark-outline"
              | "bookmarks" = "boat";
            if (route.name === "SUBMARINE - GAME") {
              iconName = focused ? "boat-outline" : "boat";
            } else if (route.name === "Configuration - screen") {
              iconName = focused ? "build-outline" : "build";
            } else if (route.name === "Movements - list") {
              iconName = focused ? "bookmark-outline" : "bookmarks";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#104a8dff",
          tabBarInactiveTintColor: "#0b1e6cff",
        })}
      >
        <Tab.Screen name="SUBMARINE - GAME" component={GameScreen} />
        <Tab.Screen
          name="Configuration - screen"
          component={ConfigurationScreen}
        />
        <Tab.Screen name="Movements - list" component={MovementList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
