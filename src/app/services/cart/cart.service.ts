import { Injectable } from '@angular/core';
import { Book } from 'src/app/types/types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  book: Array<Book> = [];
  constructor() {}

  // Add book to the cart
  add(book: Book) {
    console.log('Cart service', book);
    this.book.push(book);
  }
}
