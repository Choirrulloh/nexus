export const environment = {
  production: false,
  clickup: {
    token: 'CLICKUP_PERSONAL_TOKEN',
    spaceId: 0,
  },
  github: {
    token: 'GITHUB_PERSONAL_TOKEN',
  },
  spotify: {
    clientId: '',
    secretId: '',
    scopes: [
      'user-read-playback-state',
      'user-modify-playback-state',
      'user-read-currently-playing',
      'streaming',
      'app-remote-control',
      'playlist-read-collaborative',
      'playlist-modify-public',
      'playlist-read-private',
      'playlist-modify-private',
      'user-library-modify',
      'user-library-read',
    ].join(' '),
    redirectUri: 'http://localhost:4200/spotify/callback',
  },
};
