import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { MaterialModule } from '../material.module';
import { GithubRoutingModule } from './github-routing.module';
import { PullRequestsComponent } from './pages/pull-requests/pull-requests.component';

@NgModule({
  declarations: [PullRequestsComponent],
  imports: [CommonModule, CoreModule, MaterialModule, GithubRoutingModule],
})
export class GithubModule {}
