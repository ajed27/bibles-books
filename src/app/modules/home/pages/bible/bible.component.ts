import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.component.html'
})
export class BibleComponent {

  bookService = inject(BookService);
  books = this.bookService.books;
  public router = inject(Router);
  public root: string = this.bookService.rootBooks;
}
