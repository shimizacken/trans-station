export type StationUserPreferences = {
  favorite: boolean;
  lastPlayed?: Date;
};

export type Station = {
  id: string;
  name: string;
  streamUrl: string;
  logoUrl: string;
  description?: string;
  genre: string;
  country: string;
  userPreferences?: StationUserPreferences;
};

export type Stations = Station[];
