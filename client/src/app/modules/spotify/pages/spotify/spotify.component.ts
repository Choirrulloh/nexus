import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ClientService } from '../../services/client/client.service';
import { AppManagerService } from '../../../../core/services/app-manager.service';
import { DrawerManager } from '../../../../core/drawers/drawer-manager';
import { StartComponent } from '../../drawers/start/start.component';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss'],
})
export class SpotifyComponent implements OnInit {
  constructor(
    clientService: ClientService,
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

  ngOnInit(): void {}
}
