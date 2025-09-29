export interface Exercise {
  id: string;
  name: string;
  category: 'Poids du corps' | 'Haltères' | 'Cardio';
}

export const exercises: Exercise[] = [
  { id: '1', name: 'Pompes', category: 'Poids du corps' },
  { id: '2', name: 'Tractions', category: 'Poids du corps' },
  { id: '3', name: 'Squats', category: 'Poids du corps' },
  { id: '4', name: 'Développé couché avec haltères', category: 'Haltères' },
  { id: '5', name: 'Curl biceps avec haltères', category: 'Haltères' },
  { id: '6', name: 'Course à pied', category: 'Cardio' },
  { id: '7', name: 'Fentes', category: 'Poids du corps' },
  { id: '8', name: 'Rowing avec haltère', category: 'Haltères' },
  { id: '9', name: 'Dips sur chaise', category: 'Poids du corps' },
  { id: '10', name: 'Gainage', category: 'Poids du corps' },
];
