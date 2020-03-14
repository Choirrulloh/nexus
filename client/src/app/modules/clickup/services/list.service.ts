import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  headers = new HttpHeaders({ // TODO: Move somewhere higher
    authorization: environment.clickupToken,
  });

  options = {
    headers: this.headers,
  };

  constructor(private http: HttpClient) {

  }

  getLists(folderId: number): Observable<List[]> {
    return this.http.get<ListsResponse>(`/api/v2/folder/${folderId}/list`, this.options)
      .pipe(map(response => response.lists.map(list => new List(list.id, list.name))));
  }
}

interface ListsResponse {
  lists: List[];
}
