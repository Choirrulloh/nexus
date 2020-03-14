import { Component } from '@angular/core';
import { DrawerStartManager } from '../../../../core/drawers/drawer-start-manager';
import { FolderService } from '../../services/folder.service';
import { Observable } from 'rxjs';
import { Folder } from '../../models/folder.model';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  folders$: Observable<Folder[]>;

  constructor(private drawerStartManager: DrawerStartManager, private folderService: FolderService) {
    drawerStartManager.toggle();

    this.folders$ = this.folderService.getFolders();
  }
}
