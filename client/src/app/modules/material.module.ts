import { NgModule } from '@angular/core';
import {
  MdcButtonModule,
  MdcDrawerModule,
  MdcIconButtonModule,
  MdcIconModule,
  MdcMenuModule,
  MdcMenuSurfaceModule,
  MdcSelectModule,
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
    MdcDrawerModule
  ]
})
export class MaterialModule {}
