import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { MdcDrawer } from '@angular-mdc/web';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseDrawerManager {
  // The Material Components drawer instance
  drawer: MdcDrawer | null;

  // If the drawer is not available, the toggle should not be shown
  available = false;

  container: ViewContainerRef | null;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  toggle() {
    this.drawer.open = !this.drawer.open;
  }

  loadComponent(component: any) {
    this.available = false;
    this.container.clear();

    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    const reference = this.container.createComponent(factory);

    reference.changeDetectorRef.detectChanges();

    this.available = true;
  }
}
