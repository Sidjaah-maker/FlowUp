import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';
import { Exercise } from '../data/exercises';

interface ExerciseListItemProps {
  item: Exercise;
  onPress: () => void;
}

const ExerciseListItem: React.FC<ExerciseListItemProps> = ({
  item,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  category: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 5,
  },
});

export default ExerciseListItem;
