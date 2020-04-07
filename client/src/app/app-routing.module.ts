import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { ClickupModule } from './modules/clickup/clickup.module';
import { SpotifyModule } from './modules/spotify/spotify.module';
import { GithubModule } from './modules/github/github.module';

const route = (
  module: any,
  path: string = module.name.replace('Module', '').toLowerCase()
): Route => ({ path, loadChildren: () => module });

const routes: Routes = [
  route(HomeModule, ''),
  route(ClickupModule),
  route(SpotifyModule),
  route(GithubModule),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
