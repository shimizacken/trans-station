import React from 'react';
import { Footer } from '../components/Footer.view';
import { Header } from '../components/Header.view';
import { AudioPlayerContainer } from '../containers/AudioPlayer.container';
import { Logger } from '../components/Logger.view';

export const StationPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <AudioPlayerContainer />
        <Logger />
      </main>
      <Footer />
    </>
  );
};
