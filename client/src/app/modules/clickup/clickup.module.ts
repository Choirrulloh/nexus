import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickupComponent } from './pages/clickup/clickup.component';
import { TimerComponent } from './pages/timer/timer.component';
import { ClickupRoutingModule } from './clickup-routing.module';
import { MaterialModule } from '../material.module';
import { StartComponent } from './drawers/start/start.component';

@NgModule({
  declarations: [ClickupComponent, TimerComponent, StartComponent],
  imports: [
    CommonModule,
    ClickupRoutingModule,
    MaterialModule
  ],
})
export class ClickupModule {}
