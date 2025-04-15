import { Stations } from '../types/station.types';

export const stations: Stations = [
  {
    id: 'kan-bet',
    name: 'Kan Bet',
    streamUrl: 'https://kanliveicy.media.kan.org.il/icy/kanbet_mp3',
    streamProtocol: 'http',
    logoUrl: 'src/images/logos/reshet-bet.png',
    description: 'Kan Bet is a popular Israeli radio station.',
    genre: 'News',
    country: 'Israel',
    userPreferences: {
      favorite: true,
    },
  },
  {
    id: 'kan-88',
    name: 'Kan 88',
    streamUrl: 'https://kan88.media.kan.org.il/hls/live/2024812/2024812/playlist.m3u8',
    streamProtocol: 'hls',
    logoUrl: 'src/images/logos/reshet-bet.png',
    description: 'Kan 88 is a popular Israeli radio station.',
    genre: 'Music',
    country: 'Israel',
    userPreferences: {
      favorite: true,
    },
  },
  {
    id: 'galgalatz',
    name: 'Galgalatz',
    streamUrl: 'https://glzwizzlv.bynetcdn.com/glglz_mp3?',
    streamProtocol: 'http',
    logoUrl: 'src/images/logos/galgalatz.png',
    description: 'Galgalatz is an Israeli radio station that plays music and news.',
    genre: 'Music',
    country: 'Israel',
    userPreferences: {
      favorite: false,
    },
  },
  {
    id: 'galatz',
    name: 'Galatz',
    streamUrl: 'https://glzwizzlv.bynetcdn.com/glz_mp3?',
    streamProtocol: 'http',
    logoUrl: 'src/images/logos/galatz.png',
    description: 'Galatz is an Israeli radio station that plays news.',
    genre: 'Music',
    country: 'Israel',
    userPreferences: {
      favorite: false,
    },
  },
];
