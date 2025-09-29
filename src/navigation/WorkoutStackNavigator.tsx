import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WorkoutScreen from '../screens/WorkoutScreen';
import ExerciseDetailScreen from '../screens/ExerciseDetailScreen';
import { Exercise } from '../data/exercises';

// On définit les écrans et les paramètres qu'ils peuvent recevoir
export type WorkoutStackParamList = {
  WorkoutList: undefined; // La liste n'a pas besoin de paramètres
  ExerciseDetail: { exercise: Exercise }; // L'écran de détail attend un objet 'exercise'
};

const Stack = createNativeStackNavigator<WorkoutStackParamList>();

function WorkoutStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WorkoutList" component={WorkoutScreen} />
      <Stack.Screen name="ExerciseDetail" component={ExerciseDetailScreen} />
    </Stack.Navigator>
  );
}

export default WorkoutStackNavigator;
