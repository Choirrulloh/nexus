import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DrawerManager } from './core/drawers/drawer-manager';
import { MdcDialog, MdcDrawer } from '@angular-mdc/web';
import { AppPickerComponent } from './core/app-picker/app-picker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('drawerStart') drawerStart: MdcDrawer;
  @ViewChild('drawerStartContainer', { read: ViewContainerRef }) drawerStartContainer: ViewContainerRef;

  @ViewChild('drawerEnd') drawerEnd: MdcDrawer;
  @ViewChild('drawerEndContainer', { read: ViewContainerRef }) drawerEndContainer: ViewContainerRef;

  constructor(public drawerManager: DrawerManager, private dialog: MdcDialog) { }

  ngAfterViewInit(): void {
    this.drawerManager.start.drawer = this.drawerStart;
    this.drawerManager.start.container = this.drawerStartContainer;

    this.drawerManager.end.drawer = this.drawerEnd;
    this.drawerManager.end.container = this.drawerEndContainer;
  }

  showAppPicker() {
    this.dialog.open(AppPickerComponent);
  }
}
