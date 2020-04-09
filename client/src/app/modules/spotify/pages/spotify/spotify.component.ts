import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client/client.service';
import { PlaybackService } from '../../services/playback/playback.service';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss'],
})
export class SpotifyComponent implements OnInit {
  playing = false;

  constructor(
    clientService: ClientService,
    private playbackService: PlaybackService
  ) {
    if (!clientService.accessToken) {
      clientService.getCode();
    }
  }

  ngOnInit(): void {
    this.playbackService.getCurrentlyPlayingContext()
      .subscribe(result => {
        console.log(result); // TODO: Create model for this

        this.playing = result.is_playing;
      })
  }
}
