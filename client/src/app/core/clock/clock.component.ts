import { Component, OnDestroy, OnInit } from '@angular/core';
// @ts-ignore
import Timeout = NodeJS.Timeout;

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {
  time = new Date();
  interval: Timeout;

  ngOnInit(): void {
    this.interval = setInterval(() => this.time = new Date(), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
