import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class HomeModule { }
