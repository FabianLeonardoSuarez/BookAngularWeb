import { Injectable } from '@angular/core';
import bookdata from './bookdata.json';
import authordata from './authordata.json';

@Injectable({
  providedIn: 'root',
})
export class APIServiceService {
  headerstoHide = ['id', 'authors'];
  bookList: any = [];
  authorList: any = [];
  bookHeaders: string[] = [];
  constructor() {
    this.getBookList();
    this.getAuthorList();
  }

  getAuthorList() {
    this.authorList = authordata;
    fetch('https://localhost:7218/Library/Authors')
      .then((response) => response.json())
      .then((data) => {
        this.authorList = data;
      });
  }
  getBookList() {
    this.bookList = bookdata;
    console.log(this.bookList[0]);
    this.bookHeaders = Object.keys(this.bookList[0]).filter(
      (header) => !this.headerstoHide.includes(header)
    );
    this.bookHeaders.pop();
    fetch('https://localhost:7218/Library/Books')
      .then((response) => response.json())
      .then((data) => {
        this.bookList = data;
        console.log(this.bookList[0]);
        this.bookHeaders = Object.keys(this.bookList[0]).filter(
          (header) => !this.headerstoHide.includes(header)
        );
      });
  }
}
