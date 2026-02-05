import React, { useEffect, useState } from 'react';

import { mediaElementStatus } from '../signals/mediaElementStatus.signal';

import { Header } from '../components/Header.view';

export const HeaderContainer: React.FC = () => {
  const [isStationPlaying, setIsStationPlaying] = useState(false);

  useEffect(() => {
    mediaElementStatus.watch((status) => {
      setIsStationPlaying(status === 'playing' ? true : false);
    });
  }, []);

  return <Header isStationPlaying={isStationPlaying} />;
};
