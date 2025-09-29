import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { RouteProp } from '@react-navigation/native'; // Import pour typer la route
import Icon from 'react-native-vector-icons/Feather';

import TimerScreen from '../screens/TimerScreen';
import DashboardScreen from '../screens/DashboardScreen';
import WorkoutStackNavigator from './WorkoutStackNavigator';
import { colors } from '../constants/colors';

const Tab = createBottomTabNavigator();

// On définit les options EN DEHORS du composant pour éviter de les recréer
const screenOptions = ({ route }: { route: RouteProp<any> }) => ({
  // La variable 'focused' est maintenant utilisée pour montrer son utilité,
  // mais si tu ne l'utilises pas, tu peux la préfixer par _ : ({ focused: _focused, ... })
  tabBarIcon: ({
    focused,
    color,
    size,
  }: {
    focused: boolean;
    color: string;
    size: number;
  }) => {
    let iconName: string = '';

    if (route.name === 'Timer') {
      iconName = 'clock';
    } else if (route.name === 'Workout') {
      iconName = 'activity';
    } else if (route.name === 'Dashboard') {
      iconName = 'bar-chart-2';
    }

    // Un exemple d'utilisation de 'focused' pour changer l'icône
    // (Ici on ajoute juste un style, mais tu pourrais changer l'icône entière)
    const iconStyle = focused ? { transform: [{ scale: 1.1 }] } : {};

    return <Icon name={iconName} size={size} color={color} style={iconStyle} />;
  },
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.textSecondary,
  tabBarStyle: {
    backgroundColor: colors.surface,
    borderTopWidth: 0, // Un petit plus pour le design épuré
  },
  headerShown: true, // Par défaut, on peut le surcharger par écran
});

function AppNavigator() {
  return (
    // On passe directement la référence à notre fonction d'options
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Timer"
        component={TimerScreen}
        options={{ title: 'Jeûne' }}
      />
      <Tab.Screen
        name="Workout"
        component={WorkoutStackNavigator}
        options={{ title: 'Entraînement', headerShown: false }} // Cache le header du TabNavigator pour ce stack
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
