import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { HomeModule } from './modules/home/home.module';
import { ClickupModule } from './modules/clickup/clickup.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    ClickupModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
