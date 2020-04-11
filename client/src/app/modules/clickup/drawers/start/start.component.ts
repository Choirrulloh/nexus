import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FolderService } from '../../services/folder/folder.service';
import { Observable } from 'rxjs';
import { Folder } from '../../models/folder.model';
import { ListService } from '../../services/list/list.service';
import { map } from 'rxjs/operators';
import { DrawerStartManager } from '../../../../core/drawers/drawer-start-manager';
import { IDrawer } from '../../../../core/drawers/drawer.interface';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit, AfterViewInit, IDrawer {
  @ViewChild('template') template;

  folders$: Observable<Folder[]>;

  constructor(
    private folderService: FolderService,
    private listService: ListService,
    private viewContainerRef: ViewContainerRef,
    private drawerStartManager: DrawerStartManager
  ) {}

  ngOnInit() {
    this.folders$ = this.folderService.getFolders().pipe(
      map((folders) =>
        folders.map((folder) => ({
          ...folder,
          lists$: this.listService.getLists(folder.id),
        }))
      )
    );
  }

  onToggle(newStateOpen: boolean) {}

  ngAfterViewInit() {
    this.viewContainerRef.createEmbeddedView(this.template);
  }

  onListClicked() {
    this.drawerStartManager.toggle();
  }
}
