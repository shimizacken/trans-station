import React from 'react';

import { AudioPlayerContainer } from '../containers/AudioPlayer.container';
import { LoggerContainer } from '../components/Logger.container';
import { HeaderContainer } from '../containers/Header.container';

import { Footer } from '../components/Footer.view';
import { Stack } from '../components/Stack.view';

export const StationPage: React.FC = () => {
  return (
    <>
      <HeaderContainer />
      <main>
        <AudioPlayerContainer />
      </main>
      <Stack>
        {process.env.NODE_ENV === 'development' && <LoggerContainer />}
        <Footer />
      </Stack>
    </>
  );
};
