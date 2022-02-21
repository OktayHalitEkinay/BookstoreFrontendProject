import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AdditionNavComponent } from './components/addition-nav/addition-nav.component';
import { HomepageCarouselComponent } from './components/homepage/homepage-carousel/homepage-carousel.component';
import { HomepageAlbumComponent } from './components/homepage/homepage-album/homepage-album.component';




@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    HomepageComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    AsideComponent,
    AdditionNavComponent,
    HomepageCarouselComponent,
    HomepageAlbumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
