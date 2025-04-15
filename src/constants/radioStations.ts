import { Stations } from '../types/station.types';

export const stations: Stations = [
  {
    id: '1',
    name: 'Reshet Bet',
    streamUrl: 'https://kanliveicy.media.kan.org.il/icy/kanbet_mp3',
    logoUrl: 'src/images/logos/reshet-bet.png',
    description: 'Reshet Bet is a popular Israeli radio station.',
    genre: 'News',
    country: 'Israel',
    userPreferences: {
      favorite: true,
    },
  },
  {
    id: '2',
    name: 'Galgalatz',
    streamUrl: 'https://glzwizzlv.bynetcdn.com/glglz_mp3?',
    logoUrl: 'src/images/logos/galgalatz.png',
    description: 'Galgalatz is an Israeli radio station that plays music and news.',
    genre: 'Music',
    country: 'Israel',
    userPreferences: {
      favorite: false,
    },
  },
];
