import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { List } from '../../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor(private http: HttpClient) { }

  getLists(folderId: number): Observable<List[]> {
    return this.http.get<ListsResponse>(`/api/v2/folder/${folderId}/list`)
      .pipe(
        map(response => response.lists.map(list => List.from(list)))
      );
  }

  getList(listId: number): Observable<List> {
    return this.http.get<ListResponse>(`/api/v2/list/${listId}`)
      .pipe(
        map(response => List.from(response))
      );
  }
}

interface ListsResponse {
  lists: List[];
}

interface ListResponse {
  id: number;
  name: string;
  folder: { id: number };
}
