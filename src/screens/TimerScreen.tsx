import React from 'react';
import { View, StyleSheet } from 'react-native';
import Container from '../components/Container';
import CircularProgress from '../components/CircularProgress';
import Button from '../components/Button';
import { useFastingTimer } from '../hooks/useFastingTimer';

function TimerScreen() {
  // On récupère la phase actuelle depuis le hook
  const { isActive, formattedTime, currentPhase, toggleTimer, resetTimer } =
    useFastingTimer();

  return (
    <Container>
      <View style={styles.progressContainer}>
        {/* Et on la passe en prop au composant d'affichage */}
        <CircularProgress time={formattedTime} phase={currentPhase} />
      </View>
      <View style={styles.controlsContainer}>
        <Button
          title="Réinitialiser"
          onPress={resetTimer}
          variant="secondary"
        />
        <Button
          title={isActive ? 'Pause' : 'Démarrer'}
          onPress={toggleTimer}
          variant="primary"
        />
      </View>
    </Container>
  );
}

// ... le reste du fichier (styles) ne change pas ...
const styles = StyleSheet.create({
  progressContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default TimerScreen;
