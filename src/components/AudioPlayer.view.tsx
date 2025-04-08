import React, { forwardRef } from "react";

interface AudioPlayerProps {
  streamUrl: string;
  preload?: "auto" | "metadata" | "none";
}

export const AudioPlayer = forwardRef<HTMLAudioElement, AudioPlayerProps>(
  ({ streamUrl, preload = "auto" }, ref) => (
    <audio ref={ref} src={streamUrl} preload={preload} />
  )
);

AudioPlayer.displayName = "AudioPlayer";
