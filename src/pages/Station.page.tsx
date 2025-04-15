import React from 'react';
import { Footer } from '../components/Footer.view';
import { AudioPlayerContainer } from '../containers/AudioPlayer.container';
import { LoggerContainer } from '../components/Logger.container';
import { Stack } from '../components/Stack.view';
import { HeaderContainer } from '../containers/Header.container';

export const StationPage: React.FC = () => {
  return (
    <>
      <HeaderContainer />
      <main>
        <AudioPlayerContainer />
      </main>
      <Stack>
        <LoggerContainer />
        <Footer />
      </Stack>
    </>
  );
};
