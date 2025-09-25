import { useState, useEffect, useRef } from 'react';
// On importe nos données et le type
import { fastingPhases, FastingPhase } from '../data/fastingPhases';

export const useFastingTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  // NOUVEL ÉTAT : pour suivre la phase actuelle
  const [currentPhase, setCurrentPhase] = useState<FastingPhase>(
    fastingPhases[0],
  );

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setSeconds(prevSeconds => {
          const newSeconds = prevSeconds + 1;
          const hours = newSeconds / 3600;

          // On cherche la phase correspondante
          // On parcourt à l'envers pour trouver la plus haute phase atteinte
          for (let i = fastingPhases.length - 1; i >= 0; i--) {
            if (hours >= fastingPhases[i].startHour) {
              setCurrentPhase(fastingPhases[i]);
              break; // On sort de la boucle dès qu'on a trouvé
            }
          }

          return newSeconds;
        });
      }, 1000);
    } else if (!isActive && intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
    setCurrentPhase(fastingPhases[0]); // On réinitialise aussi la phase
  };

  const formattedTime = new Date(seconds * 1000).toISOString().substr(11, 8);

  // On expose la phase actuelle en plus du reste
  return { isActive, formattedTime, currentPhase, toggleTimer, resetTimer };
};
