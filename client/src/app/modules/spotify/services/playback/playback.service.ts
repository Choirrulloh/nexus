import { Injectable } from '@angular/core';
import { ClientService } from '../client/client.service';

@Injectable()
export class PlaybackService {
  constructor(private clientService: ClientService) {}
}
