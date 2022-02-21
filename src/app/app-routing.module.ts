import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './components/filter/filter.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:HomepageComponent},
  {path:"filter/author&publisher&language/:authorId/:publisherId/:languageId", component : HomepageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
