import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class APIServiceService {
  bookList = [{ title: 'ejempl1' }, { title: 'ejempl2' }];
  bookHeaders = ['id', 'title'];
  constructor() {
    fetch('https://localhost:7218/Library/Books', { mode: 'no-cors' })
      .then((response) => response.json())
      .then((data) => {
        this.bookList = data;
        console.log(this.bookList[0]);
        this.bookHeaders = Object.keys(this.bookList[0]);
      });
  }
}
