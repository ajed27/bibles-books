import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BookComponent } from './pages/book/book.component';
import { BibleComponent } from './pages/bible/bible.component';
import { VersionComponent } from './pages/version/version.component';
import { DictionaryComponent } from './pages/dictionary/dictionary.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LibraryComponent } from './pages/library/library.component';
import { LibraryModalComponent } from './components/modals/library-modal/library-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DocumentModalComponent } from './components/modals/document-modal/document-modal.component';


@NgModule({
  declarations: [
    BookComponent,
    BibleComponent,
    VersionComponent,
    DictionaryComponent,
    HomePageComponent,
    LibraryComponent,
    LibraryModalComponent,
    DocumentModalComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDialogModule
  ]
})
export class HomeModule { }
