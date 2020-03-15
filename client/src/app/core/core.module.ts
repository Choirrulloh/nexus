import { NgModule } from '@angular/core';
import { AppPickerComponent } from './app-picker/app-picker.component';
import { MaterialModule } from '../modules/material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [
  ],
  declarations: [AppPickerComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class CoreModule {}
