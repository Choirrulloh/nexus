import { Status } from './status.model';
import { Observable } from 'rxjs';
import { Folder } from './folder.model';

export class List {
  folderId: number;
  folder$: Observable<Folder>;

  id: number;
  name: string;
  taskCount: number;
  status: Status; // ClickUp misuses status as list color
  statuses: Status[] = [];

  constructor(init: object = {}) {
    Object.assign(this, init);
  }

  static from(data: any): List {
    return new List({
      folderId: data.folder.id,
      id: data.id,
      name: data.name,
      taskCount: data.taskCount,
      status: Status.from(data.status),
      statuses: [], // TODO:
    });
  }
}
