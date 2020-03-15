import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = [

  ];

  getTasks(listId: number): Observable<Task[]> {
    return of(this.tasks.filter(task => task.listId === listId));
  }
}
