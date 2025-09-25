import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
// On importe le type pour la phase
import { FastingPhase } from '../data/fastingPhases';

interface CircularProgressProps {
  time: string;
  phase: FastingPhase; // On attend maintenant un objet 'phase' complet
}

const CircularProgress: React.FC<CircularProgressProps> = ({ time, phase }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{time}</Text>
      {/* On affiche le nom de la phase */}
      <Text style={styles.phaseText}>{phase.name}</Text>
    </View>
  );
};

// ... le reste du fichier (styles) ne change pas ...
// styles à copier si besoin
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
