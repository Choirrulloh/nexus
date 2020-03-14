import { Component } from '@angular/core';
import { DrawerManager } from '../../../../core/drawers/drawer-manager';
import { StartComponent } from '../../drawers/start/start.component';

@Component({
  selector: 'app-clickup',
  templateUrl: './clickup.component.html',
  styleUrls: ['./clickup.component.scss']
})
export class ClickupComponent {
  constructor(private drawerManager: DrawerManager) {
    drawerManager.start.loadComponent(StartComponent);

    drawerManager.end.available = false;
  }
}
