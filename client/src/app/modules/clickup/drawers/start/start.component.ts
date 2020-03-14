import { Component } from '@angular/core';
import { DrawerStartManager } from '../../../../core/drawers/drawer-start-manager';
import { FolderService } from '../../services/folder.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  constructor(private drawerStartManager: DrawerStartManager, private folderService: FolderService) {
    drawerStartManager.title = 'ClickUp';
    drawerStartManager.toggle();

    folderService.getFolders()
      .subscribe(item => console.log(item));
  }
}
