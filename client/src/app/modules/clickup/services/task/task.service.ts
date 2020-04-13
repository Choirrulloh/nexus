import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';
import { concatMap, flatMap, map, mergeAll, mergeMap, switchMap, toArray } from 'rxjs/operators';
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
      .pipe(
        switchMap(response => {
          return forkJoin([of(Task.from(response)), this.http.get(`/api/v2/task/${taskId}/time`)])
        }),
        map(response => {
          console.log(response);
          return new Task();
        })
        // mergeMap(() => this.http.get(`/api/v2/task/${taskId}/time`)),
        // map((a, b) => {
        //   console.log(a);
        //   console.log(b);
        //   // console.log(response);
        //   // return Task.from(response);
        //   return new Task();
        // })
      );
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
