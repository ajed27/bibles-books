import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabernacleComponent,ElementComponent } from './';

const routes: Routes = [
  {
    path: '',
    component: TabernacleComponent
  },
  {
    path: ':id',
    component: ElementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabernacleRoutingModule { }
