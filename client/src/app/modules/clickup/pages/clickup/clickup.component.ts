import { Component, ComponentFactoryResolver } from '@angular/core';
import { DrawerManager } from '../../../../core/drawers/drawer-manager';
import { StartComponent } from '../../drawers/start/start.component';
import { AppManagerService } from '../../../../core/services/app-manager.service';

@Component({
  selector: 'app-clickup',
  templateUrl: './clickup.component.html',
  styleUrls: ['./clickup.component.scss']
})
export class ClickupComponent {
  constructor(
    private appManager: AppManagerService,
    private drawerManager: DrawerManager,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(StartComponent);

    appManager.title = 'ClickUp';
    this.drawerManager.start.loadComponent(factory);
    drawerManager.end.available = false;
  }
}
