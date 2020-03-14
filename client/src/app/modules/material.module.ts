import { NgModule } from '@angular/core';
import {
  MdcButtonModule,
  MdcDrawerModule,
  MdcIconButtonModule,
  MdcIconModule,
  MdcMenuModule,
  MdcMenuSurfaceModule,
  MdcSelectModule, MdcSnackbarModule,
  MdcTopAppBarModule
} from '@angular-mdc/web';

@NgModule({
  exports: [
    MdcButtonModule,
    MdcSelectModule,
    MdcMenuModule,
    MdcMenuSurfaceModule,
    MdcTopAppBarModule,
    MdcIconModule,
    MdcIconButtonModule,
    MdcDrawerModule,
    MdcSnackbarModule
  ]
})
export class MaterialModule {}
