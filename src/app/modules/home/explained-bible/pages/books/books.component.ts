import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from 'src/app/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html'
})
export class BooksComponent {
  
  bookService = inject(BookService);
  books = this.bookService.books;
  public router = inject(Router);
  public root: string = this.bookService.rootBooks;

}
