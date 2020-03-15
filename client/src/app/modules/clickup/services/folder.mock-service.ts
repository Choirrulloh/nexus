import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Folder } from '../models/folder.model';

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  private folders = [
    new Folder(1, 'Folder 1'),
    new Folder(2, 'Folder 2'),
    new Folder(3, 'Folder 3')
  ];

  getFolders(): Observable<Folder[]> {
    return of(this.folders);
  }
}
