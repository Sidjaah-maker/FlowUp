import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Button from './Button';
import { colors } from '../constants/colors';

interface AddSetFormProps {
  onSubmit: (weight: string, reps: string) => void;
}

const AddSetForm: React.FC<AddSetFormProps> = ({ onSubmit }) => {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');

  const handleSubmit = () => {
    if (weight && reps) {
      onSubmit(weight, reps);
      setWeight('');
      setReps('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={setWeight}
        placeholder="Poids (kg)"
        keyboardType="numeric"
        placeholderTextColor={colors.textSecondary}
      />
      <TextInput
        style={styles.input}
        value={reps}
        onChangeText={setReps}
        placeholder="Répétitions"
        keyboardType="numeric"
        placeholderTextColor={colors.textSecondary}
      />
      <Button title="Ajouter Série" onPress={handleSubmit} variant="primary" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 15,
    width: '30%',
    textAlign: 'center',
    fontSize: 16,
    color: colors.textPrimary,
  },
});

export default AddSetForm;
