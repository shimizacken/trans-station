export type StationUserPreferences = {
  favorite: boolean;
  lastPlayed?: Date;
};

export type MediaElementStatus = 'paused' | 'playing' | 'stalled' | 'error';

export type SteamProtocol = 'hls' | 'http';

export type StreamURL = {
  url: string;
  liveTrackDataUrl?: string;
  protocol: SteamProtocol;
};

export type RadioStationId =
  | 'kan-bet'
  | 'kan-88'
  | 'kan-kol-hamusica'
  | 'kan-gimmel'
  | 'galgalatz'
  | 'galatz'
  | 'kesem'
  | 'radio-france'
  | 'radio-france-reggae'
  | 'hevrati'
  | '103fm'
  | '102fm';

export type RadioStation = {
  id: RadioStationId;
  name: string;
  streamUrls: StreamURL[];
  logoUrl: string;
  description?: string;
  genre: string;
  country: string;
  userPreferences?: StationUserPreferences;
  status?: MediaElementStatus;
  hide?: boolean;
};

export type RadioStations = {
  [key in RadioStationId]: RadioStation;
};
