import { Component, OnInit } from '@angular/core';
import { PlaybackService } from '../../services/playback/playback.service';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss'],
})
export class SpotifyComponent implements OnInit {
  constructor(private playbackService: PlaybackService) {}

  ngOnInit(): void {
    console.log(this.playbackService.getCurrentlyPlaying());
  }
}
