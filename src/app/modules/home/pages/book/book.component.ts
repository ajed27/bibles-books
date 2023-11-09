import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from 'src/app/core/interfaces/book';
import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})
export class BookComponent {

  booksService = inject(BookService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private sanitizer = inject(DomSanitizer);

  book?: Book | null;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id: number = params['id'];
      this.book = this.getBook(id);
    });
  }

  getBook(id: number): Book | null{
    return this.booksService.getBook(id);
  }

  goBack(){
    this.router.navigateByUrl('/bible');
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
