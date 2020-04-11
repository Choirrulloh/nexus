import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { SPOTIFY_ACCESS_TOKEN, SPOTIFY_REFRESH_TOKEN } from '../../constants';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class ClientService {
  get accessToken(): string | null {
    return localStorage.getItem(SPOTIFY_ACCESS_TOKEN);
  }

  get refreshToken(): string | null {
    return localStorage.getItem(SPOTIFY_REFRESH_TOKEN);
  }

  constructor(private http: HttpClient) {}

  getCode = () => {
    const url = 'https://accounts.spotify.com/authorize';
    const query: { [key: string]: string } = {
      client_id: environment.spotify.clientId,
      response_type: 'code',
      redirect_uri: environment.spotify.redirectUri,
      scope: environment.spotify.scopes,
    };

    window.location.href = encodeURI(
      `${url}?${Object.entries(query)
        .map(([key, value]) => `${key}=${value}`)
        .join('&')}`
    );
  };

  getAccessToken = (code: string): Observable<any> => {
    const url = 'https://accounts.spotify.com/api/token';

    const body = new HttpParams()
      .set('client_id', environment.spotify.clientId)
      .set('client_secret', environment.spotify.secretId)
      .set('grant_type', 'authorization_code')
      .set('code', code)
      .set('redirect_uri', environment.spotify.redirectUri);

    return this.http
      .post(url, body.toString(), {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
      })
      .pipe(
        tap(
          (result: {
            access_token: string;
            token_type: string;
            expires_in: number;
            refresh_token: string;
            scope: string;
          }) => {
            localStorage.setItem(SPOTIFY_ACCESS_TOKEN, result.access_token);
            localStorage.setItem(SPOTIFY_REFRESH_TOKEN, result.refresh_token);
          }
        )
      );
  };

  refreshAccessToken = () => {
    const url = 'https://accounts.spotify.com/api/token';

    const body = new HttpParams()
      .set('grant_type', 'refresh_token')
      .set('refresh_token', this.refreshToken);

    return this.http
      .post(url, body.toString(), {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${btoa(
            `${environment.spotify.clientId}:${environment.spotify.secretId}`
          )}`,
        }),
      })
      .pipe(
        tap(
          (result: {
            access_token: string;
            token_type: string;
            expires_in: number;
            scope: string;
          }) => {
            localStorage.setItem(SPOTIFY_ACCESS_TOKEN, result.access_token);
          }
        )
      );
  };
}
