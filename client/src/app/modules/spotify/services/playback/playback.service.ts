import { Injectable } from '@angular/core';
import { ClientService } from '../client/client.service';

@Injectable({
  providedIn: 'root'
})
export class PlaybackService {
  constructor(private clientService: ClientService) { }

  getCurrentlyPlaying() {

  }
}
