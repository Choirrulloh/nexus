import { NgModule } from '@angular/core';
import {
  MdcButtonModule,
  MdcCardModule,
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
  MdcTypographyModule,
  MdcCheckboxModule,
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
    MdcTypographyModule,
    MdcCardModule,
    MdcCheckboxModule,
  ],
})
export class MaterialModule {}
