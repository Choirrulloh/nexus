import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../../services/list/list.service';
import { TaskService } from '../../services/task/task.service';
import { Observable, of } from 'rxjs';
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

  folderName$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private folderService: FolderService,
    private listService: ListService,
    private taskService: TaskService
  ) {

  }

  ngOnInit() {
    this.tasks$ = of((() => {
      const tasks = [];

      for (let i = 0; i < 20; i++) {
        tasks.push(new Task(1, 1, 'Mooie taak'));
      }

      return tasks;
    })());

    this.route.params.subscribe(params => {
      const listId = params.listId;

      this.list$ = this.listService.getList(listId)
        .pipe(tap(list => this.folderName$ = this.folderService.getFolderName(list.folderId)));
      this.list$.subscribe();
      this.tasks$ = this.taskService.getTasks(listId);
    });
  }
}
