import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StackNavigator } from "./StackNavigator";
import { AcercaDeScreen } from "../screens/AcercaDeScreen";

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2563EB",
        tabBarInactiveTintColor: "#111",
      }}
    >
      <Tab.Screen
        name="Catálogo"
        component={StackNavigator}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();

            navigation.navigate("Catálogo", {
              screen: "Home",
            });
          },
        })}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>☷</Text>
          ),
        }}
      />

      <Tab.Screen
        name="Acerca de"
        component={AcercaDeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>ⓘ</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
