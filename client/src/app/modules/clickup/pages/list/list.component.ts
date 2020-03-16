import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../../services/list.service';
import { TaskService } from '../../services/task.service';
import { Observable } from 'rxjs';
import { List } from '../../models/list.model';
import { Task } from '../../models/task.model';

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
    private listService: ListService,
    private taskService: TaskService
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const listId = params.listId;

      this.list$ = this.listService.getList(listId);
      this.tasks$ = this.taskService.getTasks(listId);
    });
  }
}
