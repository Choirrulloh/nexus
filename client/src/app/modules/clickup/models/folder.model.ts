import { List } from './list.model';
import { Observable } from 'rxjs';

export class Folder {
  readonly id: number;
  readonly name: string;
  lists$: Observable<List[]> | null;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
