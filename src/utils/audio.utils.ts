export const audioFn = (audio: HTMLAudioElement) => {
  const play = () => audio.play();
  const load = () => audio.load();
  const pause = () => audio.pause();
  const stop = () => {
    audio.pause();
    audio.currentTime = 0;
  };
  const setVolume = (volume: number) => {
    if (volume >= 0 && volume <= 1) {
      audio.volume = volume;
    } else {
      console.error('Volume must be between 0 and 1');
    }
  };

  return {
    play,
    load,
    pause,
    stop,
    setVolume,
    get currentTime() {
      return audio.currentTime;
    },
  };
};
