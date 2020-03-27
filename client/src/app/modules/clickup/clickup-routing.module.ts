import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickupComponent } from './pages/clickup/clickup.component';
import { TimerComponent } from './pages/timer/timer.component';
import { ListComponent } from './pages/list/list.component';


const routes: Routes = [
  {
    path: 'lists/:listId',
    component: ListComponent
  },
  {
    path: 'timer',
    component: TimerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: ClickupComponent,
      children: routes,
    }
  ])],
  exports: [RouterModule]
})
export class ClickupRoutingModule { }
