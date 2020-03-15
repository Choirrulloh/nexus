import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private lists = [
    new List(1, 1, 'List 1'),
    new List(1, 2, 'List 2'),
    new List(1, 3, 'List 3'),
    new List(1, 3, 'List 4'),
    new List(2, 5, 'List 1'),
    new List(2, 6, 'List 2'),
    new List(3, 7, 'List 1'),
    new List(3, 8, 'List 2'),
    new List(3, 9, 'List 3'),
    new List(3, 10, 'List 4'),
  ];

  getLists(folderId: number): Observable<List[]> {
    return of(this.lists.filter(list => list.folderId === folderId));
  }
}
