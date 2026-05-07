import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { productCardStyles } from "../styles/appStyles";
import { Product } from "../types";
interface Props {
  product: Product;
  onPress: () => void;
}

export const ProductCard = ({product, onPress}:Props) => {
  return (
    <TouchableOpacity style={productCardStyles.card} onPress={onPress} activeOpacity={0.7}>
      <Text style={productCardStyles.avatar}>{product.avatar}</Text>
      <View style={productCardStyles.info}>
        <Text style={productCardStyles.name}>{product.name}</Text>
        <Text style={productCardStyles.career}>{product.description}</Text>
        <Text style={productCardStyles.career}>$ {product.price}</Text>
        <View style={productCardStyles.badge}>
          <Text style={productCardStyles.badgeText}>Stock {product.stock}</Text>
        </View>
      </View>
      <Text style={productCardStyles.arrow}>›</Text>
    </TouchableOpacity>
  );
};
