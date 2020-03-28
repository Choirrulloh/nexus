import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickupComponent } from './pages/clickup/clickup.component';
import { TimerComponent } from './pages/timer/timer.component';
import { ClickupRoutingModule } from './clickup-routing.module';
import { MaterialModule } from '../material.module';
import { StartComponent } from './drawers/start/start.component';
import { ListComponent } from './pages/list/list.component';
import { RouterModule } from '@angular/router';
import { TaskComponent } from './pages/task/task.component';

@NgModule({
  declarations: [
    ClickupComponent,
    TimerComponent,
    StartComponent,
    ListComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ClickupRoutingModule,
    MaterialModule
  ],
})
export class ClickupModule {}
