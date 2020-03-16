import { Component } from '@angular/core';
import { DrawerManager } from '../../../../core/drawers/drawer-manager';
import { StartComponent } from '../../drawers/start/start.component';
import { AppManagerService } from '../../../../core/services/app-manager.service';

@Component({
  selector: 'app-clickup',
  templateUrl: './clickup.component.html',
  styleUrls: ['./clickup.component.scss']
})
export class ClickupComponent {
  constructor(
    private appManager: AppManagerService,
    private drawerManager: DrawerManager
  ) {
    appManager.title = 'ClickUp';
    drawerManager.start.loadComponent(StartComponent);
    drawerManager.end.available = false;
  }
}
