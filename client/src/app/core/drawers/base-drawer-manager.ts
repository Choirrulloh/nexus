import {
  ComponentFactory, ComponentRef,
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import { MdcDrawer } from '@angular-mdc/web';
import { IDrawer } from './drawer.interface';

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
  component: ComponentRef<IDrawer> | null;

  constructor() {}

  toggle() {
    this.drawer.open = !this.drawer.open;
  }

  loadComponent(factory: ComponentFactory<any>) {
    this.available = false;
    this.container.clear();

    this.component = this.container.createComponent(factory);
    this.component.changeDetectorRef.detectChanges();

    this.available = true;

    this.drawer.opened.subscribe(() => this.component.instance.onToggle(true));
    this.drawer.closed.subscribe(() => this.component.instance.onToggle(false));
  }
}
