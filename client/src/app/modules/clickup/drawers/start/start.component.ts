import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DrawerStartManager } from '../../../../core/drawers/drawer-start-manager';
import { FolderService } from '../../services/folder.service';
import { Observable } from 'rxjs';
import { Folder } from '../../models/folder.model';
import { ListService } from '../../services/list.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements AfterViewInit {
  @ViewChild('template') template;

  folders$: Observable<Folder[]>;

  constructor(
    private folderService: FolderService,
    private listService: ListService,
    private viewContainerRef: ViewContainerRef
  ) {
    // TODO: Create mock service
    // this.folders$ = this.folderService.getFolders()
    //   .pipe(
    //     map(folders =>
    //       folders.map(folder => ({
    //         ...folder,
    //         lists$: this.listService.getLists(folder.id)
    //       })))
    //   );
  }

  ngAfterViewInit() {
    this.viewContainerRef.createEmbeddedView(this.template); // TODO: How the hell does this work?
  }
}
