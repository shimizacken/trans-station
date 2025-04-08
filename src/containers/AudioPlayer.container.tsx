import React, { useState, useRef } from "react";
import { AudioPlayer } from "../components/AudioPlayer.view";

export const AudioPlayerContainer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <AudioPlayer
        ref={audioRef}
        streamUrl="https://kanliveicy.media.kan.org.il/icy/kanbet_mp3"
      />
      <div>
        <button onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"} Reshet Bet
        </button>
      </div>
    </div>
  );
};
