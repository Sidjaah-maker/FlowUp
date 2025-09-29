import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Container from '../components/Container';
import { colors } from '../constants/colors';

function ExerciseDetailScreen() {
  // Plus tard, nous récupérerons le nom de l'exercice ici
  const exerciseName = "Nom de l'exercice";

  return (
    <Container>
      <View style={styles.header}>
        <Text style={styles.title}>{exerciseName}</Text>
      </View>
      <View style={styles.logContainer}>
        {/* Ici viendra la liste des séries */}
        <Text>Bientôt la liste des séries...</Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textPrimary,
    textAlign: 'center',
  },
  logContainer: {
    flex: 1,
    paddingTop: 20,
  },
});

export default ExerciseDetailScreen;
