import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PlayerService {
  constructor(private http: HttpClient) {}

  getDevices(): Observable<any> {
    return this.http.get('/me/player/devices');
  }

  getCurrentlyPlayingContext(): Observable<any> {
    return this.http.get('/me/player');
  }

  // TODO: https://developer.spotify.com/documentation/web-api/reference/player/transfer-a-users-playback/
}
