import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PresentationsComponent } from './';

const routes: Routes = [
  {
    path: '',
    component: PresentationsComponent
  },
  {
    path: 'tabernacle',
    loadChildren: () => import('./tabernacle').then((m) => m.TabernacleModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentationsRoutingModule { }
