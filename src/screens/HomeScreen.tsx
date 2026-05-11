import React, { useCallback } from "react";
import { FlatList, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import { products } from "../data/products";
import { homeStyles } from "../styles/appStyles";
import { ProductCard } from "../components/ProductCard";

import { RootStackParamList } from "../navigation/typesNavigation";
import { Product } from "../types";

type PropsHome = StackScreenProps<RootStackParamList, "Home">;

export const HomeScreen = ({ navigation }: PropsHome) => {
  const renderProduct = useCallback(({ item }: { item: Product }) => (
    <ProductCard
      product={item}
      onPress={() => navigation.navigate("Detail", { product: item })}
    />
  ), [navigation]);
  
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
        contentContainerStyle={homeStyles.list}
        renderItem={renderProduct}
        initialNumToRender={6}
        windowSize={5}
        removeClippedSubviews={true}
      />
    </View>
  );
};
