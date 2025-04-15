export type StationUserPreferences = {
  favorite: boolean;
  lastPlayed?: Date;
};

export type MediaElementStatus = 'paused' | 'playing' | 'stalled' | 'error';

export type Station = {
  id: string;
  name: string;
  streamUrl: string;
  logoUrl: string;
  description?: string;
  genre: string;
  country: string;
  userPreferences?: StationUserPreferences;
  status: MediaElementStatus;
};

export type Stations = Station[];
