import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickupComponent } from './pages/clickup/clickup.component';
import { TimerComponent } from './pages/timer/timer.component';
import { ClickupRoutingModule } from './clickup-routing.module';
import { MaterialModule } from '../material.module';
import { StartComponent } from './drawers/start/start.component';
import { ListComponent } from './pages/list/list.component';
import { TaskComponent } from './pages/task/task.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ListService } from './services/list/list.service';
import { FolderService } from './services/folder/folder.service';
import { TaskService } from './services/task/task.service';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { TaskStatusIndicatorComponent } from './components/task-status-indicator/task-status-indicator.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [
    ClickupComponent,
    TimerComponent,
    StartComponent,
    ListComponent,
    TaskComponent,
    TaskStatusIndicatorComponent,
  ],
  imports: [
    CommonModule,
    ClickupRoutingModule,
    MaterialModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: [
    FolderService,
    ListService,
    TaskService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class ClickupModule {}
