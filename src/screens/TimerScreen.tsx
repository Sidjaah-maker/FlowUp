import React from 'react';
import { View, StyleSheet } from 'react-native';

// On importe nos nouveaux composants !
import Container from '../components/Container';
import CircularProgress from '../components/CircularProgress';

function TimerScreen() {
  return (
    <Container>
      <View style={styles.progressContainer}>
        <CircularProgress />
      </View>
      <View style={styles.controlsContainer}>
        {/* Les boutons viendront ici */}
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    flex: 3, // Prend 3/4 de l'espace vertical
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlsContainer: {
    flex: 1, // Prend 1/4 de l'espace vertical
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default TimerScreen;
