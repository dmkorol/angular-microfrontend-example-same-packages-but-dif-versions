import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page.component';
import { IframeComponent } from './components/iframe.component';

const routes: Routes = [
  {
    path: 'old',
    component: MainPageComponent,
  },
  {
    path: 'new',
    component: IframeComponent,
    data: {
      url: '/new-moment'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
