import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAlbumComponent } from './components/book/book-album/book-album.component';
import { BookLayoutComponent } from './components/book/book-layout/book-layout.component';
import { HomepageLayoutComponent } from './components/homepage/homepage-layout/homepage-layout.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:BookLayoutComponent},
  {path:"filter/author&publisher&language&genre&minStock&maxStock&minPrice&maxPrice/:authorId/:publisherId/:languageId/:genreId/:minStock/:maxStock/:minPrice/:maxPrice", component : BookAlbumComponent},
  {path:"filter/author/:authorId", component : BookAlbumComponent},
  {path:"filter/author&publisher/:authorId/:publisherId", component : BookAlbumComponent},
  {path:"filter/author&publisher&language/:authorId/:publisherId/:languageId", component : BookAlbumComponent},
  {path:"filter/author&publisher&language&genre&minStock/:authorId/:publisherId/:languageId/:genreId/:minStock", component : BookAlbumComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
