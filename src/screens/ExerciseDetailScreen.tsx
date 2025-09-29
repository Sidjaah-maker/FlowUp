import React, { useState, useCallback } from 'react'; // useCallback est ajouté pour l'optimisation
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Container from '../components/Container';
import AddSetForm from '../components/AddSetForm';
import { colors } from '../constants/colors';
import { useRoute, RouteProp } from '@react-navigation/native';
import { WorkoutStackParamList } from '../navigation/WorkoutStackNavigator';

// On définit le type pour une série
interface WorkoutSet {
  id: string;
  weight: string;
  reps: string;
}

// On définit les props pour notre nouveau composant de ligne
interface SetRowProps {
  item: WorkoutSet;
  index: number;
}

type ExerciseDetailScreenRouteProp = RouteProp<
  WorkoutStackParamList,
  'ExerciseDetail'
>;

// ## ÉTAPE 1 : EXTRACTION DES COMPOSANTS INSTABLES ##
// Ils sont maintenant définis UNE SEULE FOIS, en dehors du composant principal.

// Le composant pour l'en-tête de la liste
const ListHeader = () => (
  <View style={styles.listHeader}>
    <Text style={styles.headerText}>Série</Text>
    <Text style={styles.headerText}>Poids</Text>
    <Text style={styles.headerText}>Reps</Text>
  </View>
);

// Le composant pour une ligne de la liste
// React.memo est une optimisation qui empêche de re-rendre un composant si ses props n'ont pas changé.
const SetRow = React.memo(({ item, index }: SetRowProps) => (
  <View style={styles.setRow}>
    <Text style={styles.setText}>Série {index + 1}</Text>
    <Text style={styles.setText}>{item.weight} kg</Text>
    <Text style={styles.setText}>{item.reps} reps</Text>
  </View>
));

// ## COMPOSANT PRINCIPAL ##
function ExerciseDetailScreen() {
  const route = useRoute<ExerciseDetailScreenRouteProp>();
  const { exercise } = route.params;
  const [sets, setSets] = useState<WorkoutSet[]>([]);

  const handleAddSet = (weight: string, reps: string) => {
    const newSet: WorkoutSet = {
      id: Math.random().toString(),
      weight,
      reps,
    };
    setSets(currentSets => [...currentSets, newSet]);
  };

  // On définit la fonction pour renderItem en dehors du JSX
  // useCallback s'assure que cette fonction n'est pas recréée inutilement
  const renderItem = useCallback(
    ({ item, index }: { item: WorkoutSet; index: number }) => (
      <SetRow item={item} index={index} />
    ),
    [],
  );

  return (
    <Container>
      <View style={styles.header}>
        <Text style={styles.title}>{exercise.name}</Text>
      </View>
      <View style={styles.logContainer}>
        <AddSetForm onSubmit={handleAddSet} />

        <FlatList
          data={sets}
          keyExtractor={item => item.id}
          // ## ÉTAPE 2 : UTILISATION DES COMPOSANTS STABLES ##
          renderItem={renderItem}
          ListHeaderComponent={ListHeader} // Plus de fonction fléchée ici !
        />
      </View>
    </Container>
  );
}

// Les styles ne changent pas
const styles = StyleSheet.create({
  // ... tes styles ...
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
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  headerText: {
    fontSize: 16,
    color: colors.textSecondary,
    fontWeight: 'bold',
    width: '33%',
    textAlign: 'center',
  },
  setRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    backgroundColor: colors.surface,
    borderRadius: 5,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  setText: {
    fontSize: 16,
    color: colors.textPrimary,
    width: '33%',
    textAlign: 'center',
  },
});

export default ExerciseDetailScreen;
