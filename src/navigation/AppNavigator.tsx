import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

// Importation de nos écrans
import TimerScreen from '../screens/TimerScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import DashboardScreen from '../screens/DashboardScreen';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';

          if (route.name === 'Timer') {
            iconName = 'clock';
          } else if (route.name === 'Workout') {
            iconName = 'activity';
          } else if (route.name === 'Dashboard') {
            iconName = 'bar-chart-2';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF', // Une couleur active pour l'exemple
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Timer"
        component={TimerScreen}
        options={{ title: 'Jeûne' }}
      />
      <Tab.Screen
        name="Workout"
        component={WorkoutScreen}
        options={{ title: 'Entraînement' }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ title: 'Progrès' }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
