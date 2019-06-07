import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-main-page',
  template: `
    <h2>Main application</h2>
    {{title}}
  `,
  styles: []
})
export class MainPageComponent implements OnInit {
  title;

  constructor() { }

  ngOnInit() {
    this.title = 'Moment version: ' + moment.version;
  }

}
