import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task/task.service';
import { Task } from '../../models/task.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  navigateBackLink: string[];

  task: Task;
  subtasks: Task[];

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const taskId = params.taskId;

      // Reset old data
      this.task = null;
      this.subtasks = [];

      // Fetch data
      this.taskService
        .getTask(taskId)
        .pipe(
          tap((task) => {
            if (task.parentId == null) {
              // Task
              this.navigateBackLink = ['/clickup/lists', task.listId];
              this.taskService
                .getSubtasks(task.listId, taskId)
                .subscribe((subtasks) => (this.subtasks = subtasks));
            } else {
              // Subtask
              this.navigateBackLink = ['/clickup/tasks', task.parentId];
            }
          })
        )
        .subscribe((task) => (this.task = task));
    });
  }
}
