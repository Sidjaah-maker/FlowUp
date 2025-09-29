import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Alert } from 'react-native';
import Container from '../components/Container';
import SearchBar from '../components/SearchBar';
import ExerciseListItem from '../components/ExerciseListItem';
import { exercises, Exercise } from '../data/exercises';

function WorkoutScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredExercises, setFilteredExercises] =
    useState<Exercise[]>(exercises);

  useEffect(() => {
    const filtered = exercises.filter(exercise =>
      exercise.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredExercises(filtered);
  }, [searchQuery]);

  const handleExercisePress = (item: Exercise) => {
    Alert.alert('Exercice sélectionné', item.name);
  };

  return (
    <Container>
      <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
      <FlatList
        data={filteredExercises}
        renderItem={({ item }) => (
          <ExerciseListItem
            item={item}
            onPress={() => handleExercisePress(item)}
          />
        )}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default WorkoutScreen;
