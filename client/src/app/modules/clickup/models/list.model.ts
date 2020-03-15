import { Observable } from 'rxjs';
import { Task } from './task.model';

export class List {
  readonly folderId: number;
  readonly id: number;
  name: string;

  constructor(folderId: number, id: number, name: string) {
    this.folderId = folderId;
    this.id = id;
    this.name = name;
  }
}
