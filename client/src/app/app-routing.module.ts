import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((module) => module.HomeModule),
  },
  {
    path: 'clickup',
    loadChildren: () =>
      import('./modules/clickup/clickup.module').then(
        (module) => module.ClickupModule
      ),
  },
  {
    path: 'spotify',
    loadChildren: () =>
      import('./modules/spotify/spotify.module').then(
        (module) => module.SpotifyModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
