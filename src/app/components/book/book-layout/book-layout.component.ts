import { Component, OnInit } from '@angular/core';
import { BookDetailDto } from 'src/app/models/bookDetailDto';


@Component({
  selector: 'app-book',
  templateUrl: './book-layout.component.html',
  styleUrls: ['./book-layout.component.css']
})
export class BookLayoutComponent implements OnInit {
  books: BookDetailDto[] = [];
  constructor() {}

  ngOnInit(): void {}

}
