import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { CoreModule } from '../../core/core.module';
import { SpotifyComponent } from './pages/spotify/spotify.component';
import { SpotifyRoutingModule } from './spotify-routing.module';
import { CallbackComponent } from './pages/callback/callback.component';

@NgModule({
  declarations: [SpotifyComponent, CallbackComponent],
  imports: [CommonModule, MaterialModule, SpotifyRoutingModule, CoreModule],
})
export class SpotifyModule {}
