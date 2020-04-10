import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ClientService } from '../../services/client/client.service';
import { PlayerService } from '../../services/player/player.service';
import { AppManagerService } from '../../../../core/services/app-manager.service';
import { DrawerManager } from '../../../../core/drawers/drawer-manager';
import { StartComponent } from '../../drawers/start/start.component';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss'],
})
export class SpotifyComponent implements OnInit {
  context: any | null = null; // TODO: Model

  constructor(
    clientService: ClientService,
    private playerService: PlayerService,
    private appManager: AppManagerService,
    private drawerManager: DrawerManager,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    if (!clientService.accessToken) {
      clientService.getCode();
      return;
    }

    const factory = this.componentFactoryResolver.resolveComponentFactory(
      StartComponent
    );

    appManager.title = 'Spotify';
    this.drawerManager.start.loadComponent(factory);
    drawerManager.start.icon = 'settings';
    drawerManager.end.available = false;
  }

  ngOnInit(): void {
    this.playerService.getCurrentlyPlayingContext().subscribe(result => console.log(result));
  }
}
