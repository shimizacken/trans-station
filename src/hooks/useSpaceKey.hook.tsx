import { useEffect, useState } from 'react';

export const useSpaceKey = (onPress: () => void) => {
  const [isSpacePressed, setIsSpacePressed] = useState<boolean>(false);

  useEffect(() => {
    const handleSpaceKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault();

        setIsSpacePressed((prev) => !prev);
        onPress();
      }
    };

    window.addEventListener('keydown', handleSpaceKeyDown);

    return () => window.removeEventListener('keydown', handleSpaceKeyDown);
  });

  return isSpacePressed;
};
