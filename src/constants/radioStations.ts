import { RadioStations } from '../types/station.types';

export const stations: RadioStations = {
  'kan-bet': {
    id: 'kan-bet',
    name: 'Kan Bet',
    streamUrls: [
      {
        url: 'https://playerservices.streamtheworld.com/api/livestream-redirect/KAN_BET.mp3',
        protocol: 'http',
      },
      {
        url: 'https://playerservices.streamtheworld.com/api/livestream-redirect/KAN_BET.mp3',
        liveTrackDataUrl: 'https://www.kan.org.il/api/arc-cloud/get-live-track-data?channelId=8',
        protocol: 'hls',
      },
    ],
    logoUrl: 'src/images/logos/reshet-bet.png',
    description: 'Kan Bet is a popular Israeli radio station.',
    genre: 'News',
    country: 'Israel',
    userPreferences: {
      favorite: true,
    },
  },
  'kan-88': {
    id: 'kan-88',
    name: 'Kan 88',
    streamUrls: [
      {
        url: 'https://22653.live.streamtheworld.com/KAN_88.mp3?dist=rlive',
        liveTrackDataUrl: 'https://www.kan.org.il/api/arc-cloud/get-live-track-data?channelId=4',
        protocol: 'http',
      },
    ],
    logoUrl: 'src/images/logos/reshet-bet.png',
    description: 'Kan 88 is a popular Israeli radio station.',
    genre: 'Music',
    country: 'Israel',
    userPreferences: {
      favorite: true,
    },
  },
  'kan-kol-hamusica': {
    id: 'kan-kol-hamusica',
    name: 'Kan Kol Hamusica',
    streamUrls: [
      {
        url: 'https://27823.live.streamtheworld.com/KAN_KOL_HAMUSICA.mp3',
        liveTrackDataUrl: 'https://www.kan.org.il/api/arc-cloud/get-live-track-data?channelId=5',
        protocol: 'http',
      },
    ],
    logoUrl: 'src/images/logos/reshet-bet.png',
    description: 'Kan Kol Hamusica is a Israeli classical music radio station.',
    genre: 'Music',
    country: 'Israel',
    userPreferences: {
      favorite: false,
    },
  },
  'kan-gimmel': {
    id: 'kan-gimmel',
    name: 'Kan Gimmel',
    streamUrls: [
      {
        url: 'https://playerservices.streamtheworld.com/api/livestream-redirect/KAN_GIMMEL.mp3',
        liveTrackDataUrl: 'https://www.kan.org.il/api/arc-cloud/get-live-track-data?channelId=9',
        protocol: 'http',
      },
    ],
    logoUrl: 'src/images/logos/reshet-bet.png',
    description: 'Kan Gimmel is a Israeli music radio station.',
    genre: 'Music',
    country: 'Israel',
    userPreferences: {
      favorite: false,
    },
  },
  galgalatz: {
    id: 'galgalatz',
    name: 'Galgalatz',
    streamUrls: [
      {
        url: 'https://glzwizzlv.bynetcdn.com/glglz_mp3',
        protocol: 'http',
      },
    ],
    logoUrl: 'src/images/logos/galgalatz.png',
    description: 'Galgalatz is an Israeli radio station that plays music and news.',
    genre: 'Music',
    country: 'Israel',
    userPreferences: {
      favorite: false,
    },
  },
  galatz: {
    id: 'galatz',
    name: 'Galatz',
    streamUrls: [
      {
        url: 'https://glzwizzlv.bynetcdn.com/glz_mp3?awCollectionId=misc&awEpisodeId=glz',
        protocol: 'http',
      },
    ],
    logoUrl: 'src/images/logos/galatz.png',
    description: 'Galatz is an Israeli radio station that plays news.',
    genre: 'Music',
    country: 'Israel',
    userPreferences: {
      favorite: false,
    },
  },
  kesem: {
    id: 'kesem',
    name: 'Kesem 106',
    streamUrls: [
      {
        url: 'https://cdn.cybercdn.live/Kessem_Radio/live/icecast.audio',
        protocol: 'http',
      },
    ],
    logoUrl: 'src/images/logos/galatz.png',
    description: 'Galatz is an Israeli radio station that plays news.',
    genre: 'Music',
    country: 'Israel',
    userPreferences: {
      favorite: false,
    },
  },
  'radio-france': {
    id: 'radio-france',
    name: 'Radio france',
    streamUrls: [
      {
        url: 'https://stream.radiofrance.fr/fip/fip_lofi.m3u8?id=radiofrance',
        protocol: 'hls',
      },
    ],
    logoUrl: '',
    description: 'Galatz is an Israeli radio station that plays news.',
    genre: 'Music',
    country: 'France',
    userPreferences: {
      favorite: false,
    },
    hide: true,
  },
  'radio-france-reggae': {
    id: 'radio-france-reggae',
    name: 'Radio france reggae',
    streamUrls: [
      {
        url: 'https://stream.radiofrance.fr/fipreggae/fipreggae.m3u8?id=radiofrance',
        protocol: 'hls',
      },
    ],
    logoUrl: '',
    description: 'Galatz is an Israeli radio station that plays news.',
    genre: 'Music',
    country: 'France',
    userPreferences: {
      favorite: false,
    },
    hide: true,
  },
  hevrati: {
    id: 'hevrati',
    name: 'Hevrati',
    streamUrls: [
      {
        url: 'https://live.ecast.co.il/stream/hevrati',
        protocol: 'http',
      },
    ],
    logoUrl: 'src/images/logos/galatz.png',
    description: 'Galatz is an Israeli radio station that plays news.',
    genre: 'Music',
    country: 'Israel',
    userPreferences: {
      favorite: false,
    },
    hide: true,
  },
};
