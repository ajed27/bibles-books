import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BibleComponent, BookComponent, DictionaryComponent, LibraryComponent, VersionComponent } from './pages';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'bible',
    component: BibleComponent
  },
  {
    path: 'bible/:id',
    component: BookComponent 
  },
  {
    path: '',
    component: HomePageComponent 
  },
  {
    path: 'version',
    component: VersionComponent 
  },
  {
    path: 'dictionary',
    component: DictionaryComponent 
  },
  {
    path: 'library',
    component: LibraryComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
