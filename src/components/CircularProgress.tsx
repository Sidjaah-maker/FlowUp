import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

// On ajoute une prop pour recevoir le temps à afficher
interface CircularProgressProps {
  time: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ time }) => {
  return (
    <View style={styles.container}>
      {/* On utilise la prop 'time' */}
      <Text style={styles.timeText}>{time}</Text>
      <Text style={styles.phaseText}>Phase Anabolique</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
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
