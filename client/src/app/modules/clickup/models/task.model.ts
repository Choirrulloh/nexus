import { Status } from './status.model';

export class Task {
  listId: number;
  id: number;
  name: string;
  description: string;
  status: Status;
  order: number;

  constructor(init: object = {}) {
    Object.assign(this, init);
  }

  static from(data: any): Task {
    return new Task({
      listId: data.list.id,
      id: data.id,
      name: data.name,
      description: data.description,
      status: Status.from(data.status),
      order: data.orderindex
    });
  }
}
