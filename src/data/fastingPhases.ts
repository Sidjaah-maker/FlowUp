export interface FastingPhase {
  name: string;
  startHour: number;
  description: string;
}

export const fastingPhases: FastingPhase[] = [
  {
    name: 'Phase Anabolique',
    startHour: 0,
    description: 'Le corps digère et absorbe les nutriments du dernier repas.',
  },
  {
    name: 'Phase Catabolique',
    startHour: 1,
    description: 'Le corps commence à puiser dans ses réserves de glycogène.',
  },
  {
    name: 'Cétose Légère',
    startHour: 2,
    description:
      'Les réserves de glycogène sont épuisées. Le corps produit des cétones.',
  },
  {
    name: 'Autophagie',
    startHour: 3,
    description:
      'Le corps commence à nettoyer et recycler les cellules endommagées.',
  },
  {
    name: 'Hormone de Croissance',
    startHour: 4,
    description:
      "Pic de l'hormone de croissance, favorisant la réparation musculaire.",
  },
];
