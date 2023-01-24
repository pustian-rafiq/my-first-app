import { Injectable } from '@angular/core';

@Injectable()
// @Injectable({
//   providedIn: 'root',
// })
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        bookName: 'clean code',
        src: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        author: 'md. rafiqul islam',
        amount: 800,
      },
      {
        bookName: ' code refactor',
        src: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        author: 'md. rabiul islam',
        amount: 900,
      },
      {
        bookName: 'clean code',
        src: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        author: 'md. rafiqul islam',
        amount: 800,
      },
      {
        bookName: ' code refactor',
        src: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        author: 'md. rabiul islam',
        amount: 900,
      },
      {
        bookName: 'clean code',
        src: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        author: 'md. rafiqul islam',
        amount: 800,
      },
      {
        bookName: ' code refactor',
        src: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        author: 'md. rabiul islam',
        amount: 900,
      },
      {
        bookName: 'clean code',
        src: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        author: 'md. rafiqul islam',
        amount: 800,
      },
      {
        bookName: ' code refactor',
        src: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        author: 'md. rabiul islam',
        amount: 900,
      },
    ];
  }
}
