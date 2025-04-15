import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header.view';
import { mediaElementStatus } from '../signals/mediaElementStatus.signal';

export const HeaderContainer: React.FC = () => {
  const [isStationPlaying, setIsStationPlaying] = useState(false);

  useEffect(() => {
    mediaElementStatus.watch((status) => {
      setIsStationPlaying(status === 'playing' ? true : false);
    });
  }, []);

  return <Header isStationPlaying={isStationPlaying} />;
};
