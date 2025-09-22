# Architecture Technique de FlowUP

Ce document est la source de vérité pour toutes les décisions d'architecture et les standards de code du projet FlowUP.

## 1. Stack Technique

- **Framework**: React Native (v0.74+) avec TypeScript
- **Navigation**: React Navigation (v6)
- **Gestion d'état**: React Context API + Hooks custom
- **Stockage local**: AsyncStorage
- **Styling**: `StyleSheet` API de React Native (système de design custom)
- **Icônes**: `react-native-vector-icons`
- **Graphiques**: `react-native-chart-kit`

## 2. Structure des Dossiers (`src`)

L'application suit une structure basée sur les fonctionnalités et les responsabilités.

- `src/assets`: Polices, images, etc.
- `src/components`: Composants UI génériques et réutilisables (ex: `Button`, `Card`).
- `src/constants`: Fichiers de constantes pour le design system (ex: `colors.ts`, `spacing.ts`).
- `src/data`: Données statiques ou mocks (ex: `exercises.json`).
- `src/hooks`: Hooks React custom (ex: `useFastingTimer`).
- `src/navigation`: Configuration de la navigation et des stacks d'écrans.
- `src/screens`: Écrans complets de l'application (assemblage de composants).
- `src/services`: Logique métier non liée à l'UI (ex: `StorageService`, `FastingLogic`).
- `src/types`: Interfaces et types TypeScript globaux (ex: `Workout`, `FastingSession`).
- `src/utils`: Fonctions utilitaires génériques.

## 3. Standards de Code

- **Nommage**:
  - Fichiers de composants/écrans: `PascalCase.tsx` (ex: `FastingTimerScreen.tsx`)
  - Autres fichiers: `camelCase.ts` (ex: `storageService.ts`)
  - Composants: `PascalCase`
  - Variables & Fonctions: `camelCase`
  - Constantes: `UPPER_SNAKE_CASE`
- **TypeScript**: `strict` mode activé. L'utilisation de `any` est interdite.
