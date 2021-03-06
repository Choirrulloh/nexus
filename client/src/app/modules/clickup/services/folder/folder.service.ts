import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { map } from 'rxjs/operators';
import { Folder } from '../../models/folder.model';

@Injectable()
export class FolderService {
  folders$: Observable<Folder[]>;

  constructor(private http: HttpClient) {}

  getFolder(folderId): Observable<Folder> {
    if (this.folders$ == null) {
      this.folders$ = this.getFolders();
    }

    return this.folders$.pipe(
      map((folders) => folders.find((folder) => folder.id === folderId))
    );
  }

  getFolders(): Observable<Folder[]> {
    this.folders$ = this.http
      .get<FoldersResponse>(
        `/api/v2/space/${environment.clickup.spaceId}/folder`
      )
      .pipe(
        map((response) => response.folders.map((folder) => Folder.from(folder)))
      );

    return this.folders$;
  }
}

interface FoldersResponse {
  folders: Folder[];
}
