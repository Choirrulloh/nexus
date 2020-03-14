import { List } from './list.model';
import { Observable } from 'rxjs';

export class Folder {
  id: number;
  name: string;

  lists$: Observable<List[]>;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
