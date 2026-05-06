import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { detailStyles } from "../styles/appStyles";
import { RootStackParamList } from "../navigation/typesNavigation";
import { StackScreenProps } from "@react-navigation/stack";

type PropsDetail = StackScreenProps<RootStackParamList, "Detail">;

export const DetailScreen = ({ navigation, route }: PropsDetail) => {
  const { student } = route.params;
  //console.log(route.params);
  

  return (
    <ScrollView style={detailStyles.container}>
      <View style={detailStyles.hero}>
        <Text style={detailStyles.avatar}>{student.avatar}</Text>
        <Text style={detailStyles.name}>{student.name}</Text>
        <Text style={detailStyles.career}>{student.career}</Text>
      </View>

      <View style={detailStyles.card}>
        <InfoRow label="📧 Email" value={student.email} />
        <InfoRow label="🎂 Edad" value={`${student.age} años`}/>
        <InfoRow label="📚 Semestre" value={`${student.semester}`} />
        <InfoRow label="🆔 ID" value={student.id} />
      </View>

      <View style={detailStyles.actions}>
        <TouchableOpacity
          style={[detailStyles.btn, detailStyles.btnPrimary]}
          onPress={() => navigation.navigate('Edit', {student, mode: 'edit'})}
        >
          <Text style={detailStyles.btnPrimaryText}>✏️ Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[detailStyles.btn, detailStyles.btnSecondary]}
          onPress={() => navigation.navigate('Edit', {student, mode: 'view'})}
        >
          <Text style={detailStyles.btnSecondaryText}>👁 Solo ver</Text>
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
