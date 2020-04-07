import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickupComponent } from './pages/clickup/clickup.component';
import { ListComponent } from './pages/list/list.component';
import { TaskComponent } from './pages/task/task.component';

const routes: Routes = [
  {
    path: '',
    component: ClickupComponent,
    children: [
      {
        path: 'lists/:listId',
        component: ListComponent,
      },
      {
        path: 'tasks/:taskId',
        component: TaskComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClickupRoutingModule {}
