import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { editStyles } from "../styles/appStyles";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/typesNavigation";

export interface EditForm {
  name: string;
  email: string;
}

type PropsEdit = StackScreenProps<RootStackParamList, "Edit">;

export const EditScreen = ({ navigation, route }: PropsEdit) => {
  //Estraer los dos parámetros tipados
  const { student, mode } = route.params;
  const isEdit: boolean = mode === "edit";

  const [editForm, setEditForm] = useState<EditForm>({
    name: student.name,
    email: student.email,
  });

  const handleInputChance = (key: string, value: string) => {
    setEditForm({ ...editForm, [key]: value });
  };

  const handleSave = () => {
    Alert.alert(
      "Cambios guardados",
      `Nuevo nombre: ${editForm.name}\nNuevo email: ${editForm.email}`,
      [{ text: "OK", onPress: () => navigation.goBack() }],
    );
  };

  return (
    <ScrollView style={editStyles.container}>
      <View
        style={[
          editStyles.modeBanner,
          isEdit ? editStyles.editBanner : editStyles.viewBanner,
        ]}
      >
        <Text style={editStyles.modeBannerText}>
          {isEdit ? "Modo Edición" : "Modo Solo Lectura"}
        </Text>
      </View>

      <View style={editStyles.card}>
        <Text style={editStyles.avatar}>{student.avatar}</Text>

        <Text style={editStyles.label}>Nombre</Text>
        <TextInput
          style={[editStyles.input, !isEdit && editStyles.inputDisabled]}
          value={editForm.name}
          onChangeText={(value) => handleInputChance("name", value)}
          editable={isEdit}
        />

        <Text style={editStyles.label}>Email</Text>
        <TextInput
          style={[editStyles.input, !isEdit && editStyles.inputDisabled]}
          value={editForm.email}
          onChangeText={(value) => handleInputChance("email", value)}
          editable={isEdit}
          keyboardType="email-address"
        />

        <Text style={editStyles.label}>Carrera</Text>
        <TextInput
          style={[editStyles.input, editStyles.inputDisabled]}
          value={student.career}
          editable={false}
        />
        <TouchableOpacity style={editStyles.saveBtn} onPress={handleSave}>
          <Text style={editStyles.saveBtnText}>Guardar cambios</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
