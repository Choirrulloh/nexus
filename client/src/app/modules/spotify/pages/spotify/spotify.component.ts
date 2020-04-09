import { Component, OnInit } from '@angular/core';
import { PlaybackService } from '../../services/playback/playback.service';
import { ClientService } from '../../services/client/client.service';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss'],
})
export class SpotifyComponent implements OnInit {
  constructor(private clientService: ClientService) {
    if (!clientService.token) {
      clientService.getCode();
    }
  }

  ngOnInit(): void {}
}
