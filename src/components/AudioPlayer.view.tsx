import React, { forwardRef } from "react";

interface AudioPlayerProps {
  streamUrl: string;
  preload?: "auto" | "metadata" | "none";
}

type HTMLAudioRefType = HTMLAudioElement | null;

export const AudioPlayer = forwardRef<HTMLAudioRefType, AudioPlayerProps>(
  ({ streamUrl, preload = "auto" }, ref) => (
    <audio ref={ref} src={streamUrl} preload={preload} />
  )
);

AudioPlayer.displayName = "AudioPlayer";
