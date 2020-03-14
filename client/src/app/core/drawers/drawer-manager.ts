import { Injectable } from '@angular/core';
import { DrawerStartManager } from './drawer-start-manager';
import { DrawerEndManager } from './drawer-end-manager';

@Injectable({
  providedIn: 'root'
})
export class DrawerManager {
  constructor(
    public start: DrawerStartManager,
    public end: DrawerEndManager
  ) { }
}
