import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/models/author';
import { Language } from 'src/app/models/language';
import { Publisher } from 'src/app/models/publisher';
import { AuthorService } from 'src/app/services/author.service';
import { LanguageService } from 'src/app/services/language.service';
import { PublisherService } from 'src/app/services/publisher.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  public items: Array<number> | undefined;

  public authors: Author[]= [];
  public publishers: Array<Publisher> = [];
  public languages: Array<Language> = [];
  

  public selectedAuthorIds: Array<number> = [-1];
  public selectedPublisherIds: Array<number> = [-1];
  public selectedLanguageIds: Array<number> = [-1];
  
  
  constructor(private activatedRoute: ActivatedRoute,
    private publisherService:PublisherService,
    private languageService:LanguageService,
    private authorService:AuthorService) {
    
  }

  ngOnInit(): void {
   this.getAuthors();
   this.getPublishers();
   this.getLanguages();
  }

  pushSelectedAuthorId(authorId:number) {

    if(this.selectedAuthorIds.includes(authorId)){
      let x=this.selectedAuthorIds.indexOf(authorId)
       console.log("Silinen eleman:"+this.selectedAuthorIds.splice(x,1)) 
    }
    else{
      this.selectedAuthorIds.push(authorId);
    }
    this.selectedAuthorIds=this.selectedAuthorIds.slice()
  }
  pushSelectedPublisherId(publisherId:number) {

    if(this.selectedPublisherIds.includes(publisherId)){
      let x=this.selectedPublisherIds.indexOf(publisherId)
       console.log("Silinen eleman:"+this.selectedPublisherIds.splice(x,1)) 
    }
    else{
      this.selectedPublisherIds.push(publisherId);
    }
    this.selectedPublisherIds=this.selectedPublisherIds.slice()
  }

  pushSelectedLanguageId(languageId:number) {

    if(this.selectedLanguageIds.includes(languageId)){
      let x=this.selectedLanguageIds.indexOf(languageId)
       console.log("Silinen eleman:"+this.selectedLanguageIds.splice(x,1)) 
    }
    else{
      this.selectedLanguageIds.push(languageId);
    }
    this.selectedLanguageIds=this.selectedLanguageIds.slice()
  }


  listeyiTemizle() {
    this.selectedAuthorIds = [-1];
    this.selectedPublisherIds = [-1];
    this.selectedLanguageIds = [-1];
    if ($('.form-check-input').is(':checked')) {
      $('.form-check-input').prop('checked', false);
    }
  }
  yazdir(){
        this.selectedAuthorIds.forEach(element => {
        console.log(element);
      });
      console.log("*********")
  }

  getAuthors() {
    this.authorService.getAll().subscribe(response=>{
      this.authors = response.data
    })   
  }

  getPublishers(){
    this.publisherService.getAll().subscribe(response=>{
      this.publishers = response.data
    })   
  }

  getLanguages(){
    this.languageService.getAll().subscribe(response=>{
      this.languages = response.data
    })   
  }

}
