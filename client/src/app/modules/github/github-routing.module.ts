import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PullRequestsComponent } from './pages/pull-requests/pull-requests.component';

const routes: Routes = [
  {
    path: 'pull-requests',
    component: PullRequestsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GithubRoutingModule {}
