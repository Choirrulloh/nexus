import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PlayerService {
  constructor(private http: HttpClient) {}

  // getDevices(): Observable<IDevice[]> {
  //   return this.http
  //     .get<IDevice[]>('/me/player/devices')
  //     .pipe(map((result: any) => result.devices));
  // }
  //
  // getCurrentlyPlayingContext(): Observable<Context> {
  //   return this.http.get<IContext>('/me/player').pipe(
  //     map(context => new Context(context))
  //   );
  // }

  // TODO: https://developer.spotify.com/documentation/web-api/reference/player/transfer-a-users-playback/
}
