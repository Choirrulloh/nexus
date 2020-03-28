import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../../services/list/list.service';
import { TaskService } from '../../services/task/task.service';
import { Observable } from 'rxjs';
import { List } from '../../models/list.model';
import { Task } from '../../models/task.model';
import { FolderService } from '../../services/folder/folder.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list$: Observable<List>;
  tasks$: Observable<Task[]>;

  constructor(
    private route: ActivatedRoute,
    private folderService: FolderService,
    private listService: ListService,
    private taskService: TaskService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const listId = params.listId;

      this.list$ = this.listService.getList(listId)
        .pipe(
          tap(list => list.folder$ = this.folderService.getFolder(list.folderId))
        );
      this.tasks$ = this.taskService.getTasks(listId);
    });
  }
}
