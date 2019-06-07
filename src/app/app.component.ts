import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="d-flex flex-row">
      <ul style="width: 200px;" class="border">
        <li>
          <h2><a href="javascript:void(0);" [routerLink]="['old']">Old</a></h2>
        </li>
        <li>
          <h2><a href="javascript:void(0);" [routerLink]="['new']">New</a></h2>
        </li>
      </ul>
      <div style="width:800px;" class="pl-4">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {}
