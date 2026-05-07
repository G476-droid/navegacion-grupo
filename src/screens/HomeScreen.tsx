import React from "react";
import { FlatList, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackScreenProps } from "@react-navigation/stack";

import { products } from "../data/products";
import { homeStyles } from "../styles/appStyles";
import { ProductCard } from "../components/ProductCard";

import { RootStackParamList } from "../navigation/typesNavigation";
import { StackNavigator } from "../navigation/StackNavigator";
import { AcercaDeScreen } from "./AcercaDeScreen";

const Tab = createBottomTabNavigator();

// Navegación
type PropsHome = StackScreenProps<RootStackParamList, "Home">;

export const HomeScreen = ({ navigation }: PropsHome) => {

  
  return (
    <View style={homeStyles.container}>
      
      <View style={homeStyles.header}>
        <Text style={homeStyles.title}>Catálogo</Text>

        <Text style={homeStyles.subtitle}>
          {products.length} productos registrados
        </Text>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() =>
              navigation.navigate("Detail", { product: item })
            }
          />
        )}
      />
    </View>
  );
};

