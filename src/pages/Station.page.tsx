import React from 'react';
import { Footer } from '../components/Footer.view';
import { Header } from '../components/Header.view';
import { AudioPlayerContainer } from '../containers/AudioPlayer.container';
import { LoggerContainer } from '../components/Logger.container';

export const StationPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <AudioPlayerContainer />
        <LoggerContainer />
      </main>
      <Footer />
    </>
  );
};
