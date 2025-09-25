import React from 'react';
import { View, StyleSheet } from 'react-native';

import Container from '../components/Container';
import CircularProgress from '../components/CircularProgress';
import Button from '../components/Button';
// On importe notre nouveau Hook !
import { useFastingTimer } from '../hooks/useFastingTimer';

function TimerScreen() {
  // On utilise le Hook pour obtenir la logique et les données
  const { isActive, formattedTime, toggleTimer, resetTimer } =
    useFastingTimer();

  return (
    <Container>
      <View style={styles.progressContainer}>
        {/* On passe le temps formaté au composant d'affichage */}
        <CircularProgress time={formattedTime} />
      </View>
      <View style={styles.controlsContainer}>
        <Button
          title="Réinitialiser"
          onPress={resetTimer}
          variant="secondary"
        />
        {/* Le titre du bouton change en fonction de l'état 'isActive' */}
        <Button
          title={isActive ? 'Pause' : 'Démarrer'}
          onPress={toggleTimer}
          variant="primary"
        />
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default TimerScreen;
