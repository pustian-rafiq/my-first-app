import { Component } from '@angular/core';
import { BooksService } from '../services/books/books.service';
import { Book } from '../types/types';

@Component({
  selector: 'app-first',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  title = 'Books List';

  items: any[] = ['Banana', 'Apple', 'Mango'];

  isDisabled: boolean = false;
  isShowing: boolean = true;
  myName: string = '';
  book: Book[] = [];
  books: Book[] = [];

  constructor(private bookService: BooksService) {}
  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  enableButton() {
    this.isDisabled = true;
  }
  disableButton() {
    this.isDisabled = false;
  }

  handleInput(event: any) {
    console.log(event.target.value);
    this.myName = event.target.value;
  }

  toogleShowBooks() {
    this.isShowing = !this.isShowing;
  }

  addToCart(book: Book) {
    console.log('Parent component', book);
  }
}
