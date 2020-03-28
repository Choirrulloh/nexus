import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickupComponent } from './pages/clickup/clickup.component';
import { TimerComponent } from './pages/timer/timer.component';
import { ListComponent } from './pages/list/list.component';
import { TaskComponent } from './pages/task/task.component';

const routes: Routes = [
  {
    path: '',
    component: ClickupComponent,
    children: [
      {
        path: 'lists/:listId',
        component: ListComponent
      },
      {
        path: 'tasks/:taskId',
        component: TaskComponent
      },
      {
        path: 'timer',
        component: TimerComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClickupRoutingModule { }
