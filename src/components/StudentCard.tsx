import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { studentCardStyles } from "../styles/appStyles";
import { Student } from "../types";
interface Props {
  student: Student;
  onPress: () => void;
}

export const StudentCard = ({student, onPress}:Props) => {
  return (
    <TouchableOpacity style={studentCardStyles.card} onPress={onPress} activeOpacity={0.7}>
      <Text style={studentCardStyles.avatar}>{student.avatar}</Text>
      <View style={studentCardStyles.info}>
        <Text style={studentCardStyles.name}>{student.name}</Text>
        <Text style={studentCardStyles.career}>{student.career}</Text>
        <View style={studentCardStyles.badge}>
          <Text style={studentCardStyles.badgeText}>Semestre {student.semester}</Text>
        </View>
      </View>
      <Text style={studentCardStyles.arrow}>›</Text>
    </TouchableOpacity>
  );
};
