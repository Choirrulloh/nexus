import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player/player.service';
import { IDrawer } from '../../../../core/drawers/drawer.interface';
import { Observable } from 'rxjs';
import { IDevice } from '../../models/device.model';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit, IDrawer {
  devices$: Observable<IDevice[]>;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.update();
  }

  onToggle(newStateOpen: boolean) {
    this.update();
  }

  private update() {
    this.devices$ = this.playerService.getDevices();
  }
}
