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
  description: string;
}

type PropsEdit = StackScreenProps<RootStackParamList, "Edit">;

export const EditScreen = ({ navigation, route }: PropsEdit) => {
  const { product, mode } = route.params;
  const isEdit: boolean = mode === "edit";

  const [editForm, setEditForm] = useState<EditForm>({
    name: product.name,
    description: product.description,
  });

  const handleInputChance = (key: string, value: string) => {
    setEditForm((editForm) => ({ ...editForm, [key]: value }));
  };

  const handleSave = () => {
    if (!isEdit) return;

    if (editForm.name.trim() === "" || editForm.description.trim() === "") {
      Alert.alert("Campos incompletos", "Completa el nombre y la descripción");
      return;
    }

    Alert.alert(
      "Cambios guardados",
      `Nuevo nombre: ${editForm.name.trim()}\nNueva descripción: ${editForm.description.trim()}`,
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
        <Text style={editStyles.avatar}>{product.avatar}</Text>

        <Text style={editStyles.label}>Nombre</Text>
        <TextInput
          style={[editStyles.input, !isEdit && editStyles.inputDisabled]}
          value={editForm.name}
          onChangeText={(value) => handleInputChance("name", value)}
          editable={isEdit}
        />

        <Text style={editStyles.label}>Descripción</Text>
        <TextInput
          style={[editStyles.input, !isEdit && editStyles.inputDisabled]}
          value={editForm.description}
          onChangeText={(value) => handleInputChance("description", value)}
          editable={isEdit}
          multiline={true}
        
        />
        <Text style={editStyles.label}>Precio</Text>
        <TextInput
          style={[editStyles.input, editStyles.inputDisabled]}
          value={`$ ${product.price}`}
          editable={false}
        />
        <Text style={editStyles.label}>Stock</Text>
        <TextInput
          style={[editStyles.input, editStyles.inputDisabled]}
          value={String(product.stock)}
          editable={false}
        />
        {isEdit && (
          <TouchableOpacity style={editStyles.saveBtn} onPress={handleSave}>
            <Text style={editStyles.saveBtnText}>Guardar cambios</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};
