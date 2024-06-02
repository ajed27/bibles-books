import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DictionaryComponent, LibraryComponent, VersionComponent } from './pages';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent 
  },
  {
    path: 'bible',
    loadChildren: () => import('./explained-bible').then((m) => m.ExplainedBibleModule),
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
  {
    path: 'presentation',
    loadChildren: () => import('./presentations').then((m) => m.PresentationsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
