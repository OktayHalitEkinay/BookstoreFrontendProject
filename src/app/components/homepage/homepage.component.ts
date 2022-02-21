import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDetailDto } from 'src/app/models/bookDetailDto';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  books: BookDetailDto[] = [];
  constructor(private activatedRoute: ActivatedRoute,private bookService:BookService) { }

  ngOnInit(): void {

     this.activatedRoute.params.subscribe((params) => {
      if (params["authorId"],params["publisherId"],params["languageId"]) {
        this.getAllBookDetailsByFilter(params["authorId"],params["publisherId"],params["languageId"]);
      }
      else{
        // this.getAllBookDetails();
      }
    });
    
  }



  getAllBookDetailsByFilter(authorIds:number[],publisherIds:number[],languageIds:number[]) {
    this.bookService.getAllBookDetailsByFilter(authorIds,publisherIds,languageIds).subscribe(response=>{
      this.books= response.data
    })   
  }

  getAllBookDetails() {
    this.bookService.getAllBookDetails().subscribe(response=>{
      this.books = response.data
    })   
  }

}
