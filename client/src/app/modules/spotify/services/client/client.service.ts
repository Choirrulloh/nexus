import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { SPOTIFY_ACCESS_TOKEN } from '../../constants';
import { Observable, of } from 'rxjs';
import { urlJoin } from '@angular-devkit/build-angular/src/utils';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private client;

  get token(): string {
    return localStorage.getItem(SPOTIFY_ACCESS_TOKEN);
  }

  constructor() {
    // TODO: Check token or something
    this.redirectAuthCode();
  }

  get(endpoint: string): Observable<any> {
    return of(true) // TODO: this could be called from playbackService like `this.clientService.get('/playbackstatus');` And it would automatically refresh token if needed
  }

  private redirectAuthCode = () => {
    const url = 'https://accounts.spotify.com/authorize';
    const query: { [key: string]: string } = {
      client_id: environment.spotify.clientId,
      response_type: 'code',
      redirect_uri: environment.spotify.redirectUri,
      scope: environment.spotify.scopes
    };

    window.location.href = encodeURI(`${url}?${Object.entries(query).map(([key, value]) => `${key}=${value}`).join('&')}`);
  }
}
