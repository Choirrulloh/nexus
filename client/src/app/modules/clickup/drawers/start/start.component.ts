import { Component } from '@angular/core';
import { DrawerStartManager } from '../../../../core/drawers/drawer-start-manager';
import { FolderService } from '../../services/folder.service';
import { forkJoin } from 'rxjs';
import { Folder } from '../../models/folder.model';
import { ListService } from '../../services/list.service';
import { flatMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  folders: Folder[];

  constructor(
    private drawerStartManager: DrawerStartManager,
    private folderService: FolderService,
    private listService: ListService
  ) {
    this.folderService.getFolders()
      .pipe(
        tap(folders => this.folders = folders),
        flatMap(folders => {
          const observables = [];

          folders.forEach(folder => {
            folder.lists$ = this.listService.getLists(folder.id);
            observables.push(folder.lists$);
          });

          return forkJoin(observables);
        })
      ).subscribe();
  }
}
