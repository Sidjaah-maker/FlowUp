# Journal de Bord - Projet FlowUP

Ce document retrace les décisions clés, les étapes importantes et les défis rencontrés durant le développement de FlowUP.

---

### 29 Septembre 2025 - Améliorations et Corrections

- **Objectif** : Mettre en place la fonctionnalité de recherche d'exercices.
- **Décisions Clés** :
  - Implémentation d'un écran de recherche avec une `FlatList` pour afficher les exercices.
  - Ajout d'une `SearchBar` pour filtrer les exercices en temps réel.
  - Utilisation de `useState` et `useEffect` pour gérer l'état de la recherche et le filtrage.
- **Actions Réalisées** :
  - Mise à jour de `WorkoutScreen.tsx` pour inclure la logique de recherche et d'affichage.
  - Création du composant `ExerciseListItem` pour un affichage modulaire.
  - Intégration des données d'exercices depuis `src/data/exercises.ts`.
- **Prochaine Étape** : Implémenter la sélection d'exercices et la création de séances d'entraînement.

---

### 29 Septembre 2025 - Améliorations et Corrections

- **Objectif** : Fiabiliser les données de l'application et améliorer la structure du projet.
- **Décisions Clés** :
  - Correction des heures de démarrage des phases de jeûne pour refléter des données plus précises.
  - Réorganisation des fichiers de configuration iOS pour une meilleure clarté.
- **Actions Réalisées** :
  - Mise à jour du fichier `src/data/fastingPhases.ts` avec les nouvelles valeurs.
  - Déplacement de `Gemfile` et `Gemfile.lock` dans le dossier `ios`.
  - Mise à jour des dépendances natives (iOS) et JavaScript.
- **Prochaine Étape** : Développement de l'écran du minuteur.

---

### Septembre 2025 - Initialisation du Projet

- **Objectif** : Démarrer le projet FlowUP sur des bases solides.
- **Décisions Clés** :
  - Validation du périmètre MVP (Timer Jeûne, Logger Workout, Dashboard) basé sur le `PRODUCT_SPEC.md`.
  - Choix de la stack technique : React Native + TypeScript.
  - Adoption d'une approche "local-first" avec AsyncStorage pour le MVP.
  - Validation de l'utilisation de `StyleSheet` de React Native pour un design system custom.
- **Actions Réalisées** :
  - Création du projet via la commande `npx react-native init`.
  - Mise en place de l'architecture des dossiers (`src/...`) comme défini dans `ARCHITECTURE.md`.
  - Création de la documentation initiale du projet.
- **Prochaine Étape** : Installation des dépendances critiques (navigation) et configuration initiale de l'application.
