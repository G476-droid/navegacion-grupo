import React from "react";
import { Text, View } from "react-native";
import { aboutStyles } from "../styles/appStyles";

export const AcercaDeScreen = () => {
  return (
    <View style={aboutStyles.container}>
      <Text style={aboutStyles.title}>Acerca de</Text>

      <View style={aboutStyles.card}>
        <Text style={aboutStyles.appName}>
          Catálogo Tech v1.0
        </Text>

        <Text style={aboutStyles.description}>
          App de demostración React Native
        </Text>

        <View style={aboutStyles.row}>
          <Text style={aboutStyles.label}>Integrante 1</Text>

          <Text style={aboutStyles.value}>
            Gloria Cumbicos
          </Text>
        </View>

        <View style={aboutStyles.row}>
          <Text style={aboutStyles.label}>Integrante 2</Text>

          <Text style={aboutStyles.value}>
            Jorge Bustillos
          </Text>
        </View>

        <View style={aboutStyles.row}>
          <Text style={aboutStyles.label}>Carrera</Text>

          <Text style={aboutStyles.value}>
            Ing. en Informática
          </Text>
        </View>

        <View style={aboutStyles.row}>
          <Text style={aboutStyles.label}>Materia</Text>

          <Text style={aboutStyles.value}>
            Desarrollo para aplicaciones móviles
          </Text>
        </View>
      </View>
    </View>
  );
};