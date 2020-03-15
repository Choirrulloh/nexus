import { Component } from '@angular/core';
import { DrawerStartManager } from '../../../../core/drawers/drawer-start-manager';
import { FolderService } from '../../services/folder.service';
import { forkJoin, from, Observable, of } from 'rxjs';
import { Folder } from '../../models/folder.model';
import { ListService } from '../../services/list.service';
import { concatMap, delay, flatMap, map, mergeAll, mergeMap, tap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  folders$: Observable<Folder[]>;

  constructor(
    private drawerStartManager: DrawerStartManager,
    private folderService: FolderService,
    private listService: ListService
  ) {
    this.folders$ = this.folderService.getFolders()
      .pipe(
        mergeMap(folders =>
          from(folders).pipe(
            mergeMap(
              folder => {
                const lists$ = this.listService.getLists(folder.id);
                return of({ ...folder, lists$ });
              },
            ),
            toArray(),
            // map(folder => ({ ...folders, folder})),
          )
        ),
      );

    // this.folders$ = this.folderService.getFolders().pipe(
    //   mergeMap(folders => {
    //     from(folders).pipe(
    //       mergeMap(folder => {
    //
    //       })
    //     );
    //   })
    // );
    //
    // this.folders$.subscribe(response => console.log(JSON.stringify(response, null, 2)));
  }
}
