import { NgModule } from '@angular/core';
import { AppPickerComponent } from './app-picker/app-picker.component';
import { MaterialModule } from '../modules/material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  exports: [
    ClockComponent
  ],
  declarations: [
    AppPickerComponent,
    ClockComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class CoreModule {}
