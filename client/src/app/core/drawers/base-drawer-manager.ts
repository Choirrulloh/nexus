import {
  ComponentFactory,
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import { MdcDrawer } from '@angular-mdc/web';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseDrawerManager {
  // The Material Components drawer instance
  drawer: MdcDrawer | null;

  // If the drawer is not available, the toggle should not be shown
  available = false;

  icon = 'menu';

  container: ViewContainerRef | null;

  constructor() {}

  toggle() {
    this.drawer.open = !this.drawer.open;
  }

  loadComponent(factory: ComponentFactory<any>) {
    this.available = false;
    this.container.clear();

    this.container.createComponent(factory).changeDetectorRef.detectChanges();

    this.available = true;
  }
}
