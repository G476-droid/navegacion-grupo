import React from "react";
import { FlatList, Text, View } from "react-native";
import { students } from "../data/students";
import { homeStyles } from "../styles/appStyles";
import { StudentCard } from "../components/StudentCard";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/typesNavigation";

// Navegación
type PropsHome = StackScreenProps<RootStackParamList, "Home">;

export const HomeScreen = ({ navigation }: PropsHome) => {

  
  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.header}>
        <Text style={homeStyles.title}>Directorio</Text>
        <Text style={homeStyles.subtitle}>
          {students.length} estudiantes registrados
        </Text>
      </View>

      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <StudentCard student={item} onPress={() => navigation.navigate('Detail', {student : item})} />
        )}
      />
    </View>
  );
};
