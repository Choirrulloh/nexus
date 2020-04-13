import { Component, OnInit } from '@angular/core';
import { IDrawer } from '../../../../core/drawers/drawer.interface';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit, IDrawer {
  ngOnInit(): void {
    this.update();
  }

  onToggle(newStateOpen: boolean) {
    this.update();
  }

  private update() {
    // TODO: Fetch data for sidebar
  }
}
