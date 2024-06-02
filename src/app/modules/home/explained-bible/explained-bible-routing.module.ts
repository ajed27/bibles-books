import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookComponent, BooksComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent
  },
  {
    path: ':id',
    component: BookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplainedBibleRoutingModule { }
