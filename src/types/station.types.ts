export type StationUserPreferences = {
  favorite: boolean;
  lastPlayed?: Date;
};

export type MediaElementStatus = 'paused' | 'playing' | 'stalled' | 'error';

export type SteamProtocol = 'hls' | 'http';

export type StreamURL = {
  url: string;
  protocol: SteamProtocol;
};

export type Station = {
  id: string;
  name: string;
  streamUrls: StreamURL[];
  logoUrl: string;
  description?: string;
  genre: string;
  country: string;
  userPreferences?: StationUserPreferences;
  status?: MediaElementStatus;
};

export type Stations = Station[];
