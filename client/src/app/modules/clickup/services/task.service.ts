import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  headers = new HttpHeaders({ // TODO: Move somewhere higher
    authorization: environment.clickupToken,
  });

  options = {
    headers: this.headers,
  };

  constructor(private http: HttpClient) {

  }

  getTasks(listId: number): Observable<Task[]> {
    return this.http.get<TasksResponse>(`/api/v2/list/${listId}/task`, this.options)
      .pipe(map(response => response.tasks.map(task => new Task(listId, task.id, task.name))));
  }
}

interface TasksResponse {
  tasks: Task[];
}
