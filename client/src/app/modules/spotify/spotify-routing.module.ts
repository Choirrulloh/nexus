import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotifyComponent } from './pages/spotify/spotify.component';
import { CallbackComponent } from './pages/callback/callback.component';

const routes: Routes = [
  {
    path: '',
    component: SpotifyComponent,
  },
  {
    path: 'callback',
    component: CallbackComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpotifyRoutingModule {}
