import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { BooksService } from '../services/books/books.service';
import { BooksComponent } from './books.component';

@NgModule({
  declarations: [BooksComponent, BookComponent],
  providers: [BooksService],
  imports: [CommonModule],
  exports: [BooksComponent],
})
export class BooksModule {}
