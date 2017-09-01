import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieService } from './shared/services/movie.service';
import { SearchComponent } from './components/search/search.component';
import {SearchModule} from './shared/search.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MoviesComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SearchModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
