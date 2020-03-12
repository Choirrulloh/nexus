import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickupComponent } from './pages/clickup/clickup.component';
import { TimerComponent } from './pages/timer/timer.component';


const routes: Routes = [
  {
    path: 'clickup',
    component: ClickupComponent
  },
  {
    path: 'clickup/timer',
    component: TimerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClickupRoutingModule { }
