import { RadioStations } from '../types/station.types';

export const stations: RadioStations = {
  'kan-bet': {
    id: 'kan-bet',
    name: 'Kan Bet',
    streamUrls: [
      {
        url: 'https://playerservices.streamtheworld.com/api/livestream-redirect/KAN_BET.mp3',
        liveTrackDataUrl: 'https://www.kan.org.il/api/arc-cloud/get-live-track-data?channelId=8',
        protocol: 'hls',
      },
      {
        url: 'https://kanliveicy.media.kan.org.il/icy/kanbet_mp3',
        protocol: 'http',
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
        url: 'https://kan88.media.kan.org.il/hls/live/2024812/2024812/playlist.m3u8',
        liveTrackDataUrl: 'https://www.kan.org.il/api/arc-cloud/get-live-track-data?channelId=4',
        protocol: 'hls',
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
        url: 'https://kankolhamusica.media.kan.org.il/hls/live/2024817/2024817/playlist.m3u8',
        liveTrackDataUrl: 'https://www.kan.org.il/api/arc-cloud/get-live-track-data?channelId=5',
        protocol: 'hls',
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
        url: 'https://kangimmel.media.kan.org.il/hls/live/2024813/2024813/playlist.m3u8',
        liveTrackDataUrl: 'https://www.kan.org.il/api/arc-cloud/get-live-track-data?channelId=9',
        protocol: 'hls',
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
        url: 'https://glzwizzlv.bynetcdn.com/glglz_mp3?',
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
        url: 'https://glzwizzlv.bynetcdn.com/glz_mp3?',
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
  // 'radio-france': {
  //   id: 'radio-france',
  //   name: 'Radio france',
  //   streamUrls: [
  //     {
  //       url: 'https://stream.radiofrance.fr/fip/fip_lofi.m3u8?id=radiofrance',
  //       protocol: 'hls',
  //     },
  //   ],
  //   logoUrl: '',
  //   description: 'Galatz is an Israeli radio station that plays news.',
  //   genre: 'Music',
  //   country: 'France',
  //   userPreferences: {
  //     favorite: false,
  //   },
  // },
  // 'radio-france-reggae': {
  //   id: 'radio-france-reggae',
  //   name: 'Radio france reggae',
  //   streamUrls: [
  //     {
  //       url: 'https://stream.radiofrance.fr/fipreggae/fipreggae.m3u8?id=radiofrance',
  //       protocol: 'hls',
  //     },
  //   ],
  //   logoUrl: '',
  //   description: 'Galatz is an Israeli radio station that plays news.',
  //   genre: 'Music',
  //   country: 'France',
  //   userPreferences: {
  //     favorite: false,
  //   },
  // },
  // hevrati: {
  //   id: 'hevrati',
  //   name: 'Hevrati',
  //   streamUrls: [
  //     {
  //       url: 'https://live.ecast.co.il/stream/hevrati',
  //       protocol: 'http',
  //     },
  //   ],
  //   logoUrl: 'src/images/logos/galatz.png',
  //   description: 'Galatz is an Israeli radio station that plays news.',
  //   genre: 'Music',
  //   country: 'Israel',
  //   userPreferences: {
  //     favorite: false,
  //   },
  // },
};
