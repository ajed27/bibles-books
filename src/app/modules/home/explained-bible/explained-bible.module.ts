import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplainedBibleRoutingModule } from './explained-bible-routing.module';
import { BooksComponent } from './pages/books/books.component';
import { BookComponent } from './pages/book/book.component';


@NgModule({
  declarations: [
    BooksComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    ExplainedBibleRoutingModule
  ]
})
export class ExplainedBibleModule { }
