import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../../models/task.model';

@Injectable()
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks(listId: string): Observable<Task[]> {
    return this.http
      .get<TasksResponse>(`/api/v2/list/${listId}/task`)
      .pipe(map((response) => response.tasks.map((task) => Task.from(task))));
  }

  getTask(taskId: string): Observable<Task> {
    return this.http
      .get<TaskResponse>(`/api/v2/task/${taskId}`)
      .pipe(map((response) => Task.from(response)));
  }

  getSubtasks(listId: string, taskId: string): Observable<Task[]> {
    return this.http
      .get<TasksResponse>(`/api/v2/list/${listId}/task?parent=${taskId}`)
      .pipe(map((response) => response.tasks.map((task) => Task.from(task))));
  }
}

interface TasksResponse {
  tasks: Task[];
}

interface TaskResponse {
  task: Task;
}
