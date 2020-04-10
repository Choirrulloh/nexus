import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player/player.service';
import { IDrawer } from '../../../../core/drawers/drawer.interface';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit, IDrawer {
  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService.getDevices().subscribe(result => console.log(result));
  }

  onToggle(newStateOpen: boolean) {
    // TODO: Re-fetch devices
  }
}
