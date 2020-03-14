import { Component, } from '@angular/core';
import { DrawerManager } from '../../../../core/drawers/drawer-manager';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private drawerManager: DrawerManager) {
    drawerManager.start.available = false;
    drawerManager.end.available = false;
  }
}
