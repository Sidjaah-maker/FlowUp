import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

const CircularProgress = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>14:25:10</Text>
      <Text style={styles.phaseText}>Phase Anabolique</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    borderRadius: 150, // La moitié de la largeur/hauteur pour un cercle parfait
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    // Ombre pour donner un effet de profondeur
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
  },
  timeText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  phaseText: {
    fontSize: 18,
    color: colors.secondary,
    marginTop: 10,
  },
});

export default CircularProgress;
