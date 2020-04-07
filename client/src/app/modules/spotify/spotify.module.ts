import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { CoreModule } from '../../core/core.module';
import { SpotifyComponent } from './pages/spotify/spotify.component';
import { SpotifyRoutingModule } from './spotify-routing.module';

@NgModule({
  declarations: [SpotifyComponent],
  imports: [CommonModule, MaterialModule, SpotifyRoutingModule, CoreModule],
})
export class SpotifyModule {}
