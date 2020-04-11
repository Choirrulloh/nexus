import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { CoreModule } from '../../core/core.module';
import { SpotifyComponent } from './pages/spotify/spotify.component';
import { SpotifyRoutingModule } from './spotify-routing.module';
import { CallbackComponent } from './pages/callback/callback.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ClientService } from './services/client/client.service';
import { PlayerService } from './services/player/player.service';
import { EndpointInterceptor } from './interceptors/endpoint.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { StartComponent } from './drawers/start/start.component';

@NgModule({
  declarations: [SpotifyComponent, CallbackComponent, StartComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SpotifyRoutingModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: [
    ClientService,
    PlayerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EndpointInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class SpotifyModule {}
