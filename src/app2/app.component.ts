import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  template: `
    <h2>New application</h2>
    <div>{{ title }}</div>`,
})
export class AppComponent {
  title = 'Moment version: ' + moment.version;
}
