import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';

import Container from '../components/Container';
import CircularProgress from '../components/CircularProgress';
// On importe notre nouveau composant !
import Button from '../components/Button';

function TimerScreen() {
  const handleStartPress = () => {
    Alert.alert('Action', 'Le minuteur devrait démarrer !');
  };

  const handleResetPress = () => {
    Alert.alert('Action', 'Le minuteur devrait se réinitialiser !');
  };

  return (
    <Container>
      <View style={styles.progressContainer}>
        <CircularProgress />
      </View>
      <View style={styles.controlsContainer}>
        <Button
          title="Réinitialiser"
          onPress={handleResetPress}
          variant="secondary"
        />
        <Button title="Démarrer" onPress={handleStartPress} variant="primary" />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlsContainer: {
    flex: 1,
    flexDirection: 'row', // Aligne les boutons horizontalement
    justifyContent: 'space-around', // Espace équitable entre les boutons
    alignItems: 'center',
  },
});

export default TimerScreen;
