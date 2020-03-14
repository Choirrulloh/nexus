import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickupComponent } from './pages/clickup/clickup.component';
import { TimerComponent } from './pages/timer/timer.component';


const routes: Routes = [
  {
    path: 'timer',
    component: TimerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'clickup',
      component: ClickupComponent,
      children: routes,
    }
  ])],
  exports: [RouterModule]
})
export class ClickupRoutingModule { }
