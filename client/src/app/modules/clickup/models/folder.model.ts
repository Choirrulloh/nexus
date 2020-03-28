import { List } from './list.model';
import { Observable } from 'rxjs';

export class Folder {
  readonly id: number;
  readonly name: string;
  lists$: Observable<List[]> | null;

  constructor(init: object = {}) {
    Object.assign(this, init);
  }

  static from(data: any): Folder {
    return new Folder({
      id: data.id,
      name: data.name,
    });
  }
}
