import { Component } from '@angular/core';
import { DrawerStartManager } from '../../../../core/drawers/drawer-start-manager';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  constructor(private drawerStartManager: DrawerStartManager) {
    drawerStartManager.title = 'Clickup';
  }
}
