import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDetailDto } from 'src/app/models/bookDetailDto';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-album',
  templateUrl: './book-album.component.html',
  styleUrls: ['./book-album.component.css']
})
export class BookAlbumComponent implements OnInit {

  books: BookDetailDto[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['authorId'], 
      params['publisherId'], 
      params['languageId'],
      params['genreId'],
      params['minStock'],
      params['maxStock'],
      params ['minPrice'],
      params['maxPrice'])
      {
        this.getAllBookDetailsByFilter(
          params['authorId'],
          params['publisherId'],
          params['languageId'],
          params['genreId'],
          params['minStock'],
          params['maxStock'],
          params ['minPrice'],
          params['maxPrice']
        );
      } else {
        // this.getAllBookDetails();
      }
    });
  }

  getAllBookDetailsByFilter(
    authorIds: number[],
    publisherIds: number[],
    languageIds: number[],
    genreIds:number[],
    minStock:number,
    maxStock:number,
    minPrice:number,
    maxPrice:number

  ) {
    this.bookService
      .getAllBookDetailsByFilter(
        authorIds,
         publisherIds, 
         languageIds,
         genreIds,
         minStock,
         maxStock,
         minPrice,
         maxPrice)
      .subscribe((response) => {
        this.books = response.data;
      });
      console.log(this.books)
  }

  getAllBookDetails() {
    this.bookService.getAllBookDetails().subscribe((response) => {
      this.books = response.data;
    });
  }
}
