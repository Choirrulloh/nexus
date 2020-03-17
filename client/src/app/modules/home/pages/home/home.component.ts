import { Component, } from '@angular/core';
import { DrawerManager } from '../../../../core/drawers/drawer-manager';
import { AppManagerService } from '../../../../core/services/app-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private drawerManager: DrawerManager, private appManager: AppManagerService) {
    appManager.title = 'Home';
    drawerManager.start.available = false;
    drawerManager.end.available = false;
  }
}
