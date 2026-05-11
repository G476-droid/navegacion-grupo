import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { detailStyles } from "../styles/appStyles";
import { RootStackParamList } from "../navigation/typesNavigation";
import { StackScreenProps } from "@react-navigation/stack";

type PropsDetail = StackScreenProps<RootStackParamList, "Detail">;

export const DetailScreen = ({ navigation, route }: PropsDetail) => {
  const { product } = route.params;
  

  return (
    <ScrollView style={detailStyles.container}>
      <View style={detailStyles.hero}>
        <Text style={detailStyles.avatar}>{product.avatar}</Text>
        <Text style={detailStyles.name}>{product.name}</Text>
        <Text style={detailStyles.career}>{product.description}</Text>
      </View>

      <View style={detailStyles.card}>
        <InfoRow label="📦 Nombre" value={product.name} />
        <InfoRow label="📝 Descripción" value={product.description}/>
        <InfoRow label="💲 Precio" value={`$ ${product.price}`} />
        <InfoRow label="📦 Stock" value={`${product.stock}`} />
        <InfoRow label="🆔 ID" value={product.id} />
      </View>

      <View style={detailStyles.actions}>
        <TouchableOpacity
          style={[detailStyles.btn, detailStyles.btnPrimary]}
          onPress={() => navigation.navigate('Edit', {product, mode: 'edit'})}
        >
          <Text style={detailStyles.btnPrimaryText}>✏️ Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[detailStyles.btn, detailStyles.btnSecondary]}
          onPress={() => navigation.navigate('Edit', {product, mode: 'view'})}
        >
          <Text style={detailStyles.btnSecondaryText}>👁 Solo Ver</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

interface Props {
  label: string;
  value: string;
}

export const InfoRow = ({ label, value }: Props) => {
  return (
    <View style={detailStyles.row}>
      <Text style={detailStyles.rowLabel}>{label}</Text>
      <Text style={detailStyles.rowValue}>{value}</Text>
    </View>
  );
};
