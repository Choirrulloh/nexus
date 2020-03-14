import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  drawer = {
    title: '',
    subtitle: '',
  };

  constructor() {
    this.drawer.title = 'Lijpe shit';
    this.drawer.subtitle = 'Cool man';
  }
}
