import { NgModule } from '@angular/core';
import {
  MdcButtonModule,
  MdcDialogModule,
  MdcDrawerModule,
  MdcElevationModule,
  MdcFabModule,
  MdcIconButtonModule,
  MdcIconModule,
  MdcMenuModule,
  MdcMenuSurfaceModule,
  MdcRippleModule,
  MdcSelectModule,
  MdcSnackbarModule,
  MdcTopAppBarModule,
  MdcTypographyModule
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
    MdcSnackbarModule,
    MdcDialogModule,
    MdcFabModule,
    MdcRippleModule,
    MdcElevationModule,
    MdcTypographyModule
  ]
})
export class MaterialModule {}
