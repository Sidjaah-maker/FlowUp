import { useState, useEffect, useRef } from 'react';

export const useFastingTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // useRef est utilisé pour garder une référence stable à notre intervalle
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive) {
      // Si le minuteur est actif, on lance l'intervalle
      intervalRef.current = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && intervalRef.current) {
      // S'il est inactif, on nettoie l'intervalle
      clearInterval(intervalRef.current);
    }

    // Fonction de nettoyage de useEffect
    // Elle est appelée quand le composant est démonté ou avant chaque ré-exécution de l'effet
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive]); // Cet effet ne se redéclenche que si `isActive` change

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  // Formate les secondes en HH:MM:SS
  const formattedTime = new Date(seconds * 1000).toISOString().substr(11, 8);

  // On expose les états et les fonctions dont notre UI aura besoin
  return { isActive, formattedTime, toggleTimer, resetTimer };
};
