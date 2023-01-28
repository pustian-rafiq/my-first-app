import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Book } from '../../types/types';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() book: Book = {} as Book;
  // This emitter pass data to the parent component
  // @Output() bookEmitter = new EventEmitter<Book>();
  constructor(private cartService: CartService) {}
  addToCart() {
    this.cartService.add(this.book);
    // This emitter pass data to the parent component
    // this.bookEmitter.emit(this.book);
  }
}
