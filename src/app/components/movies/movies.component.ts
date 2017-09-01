import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../shared/services/movie.service';
import {Movie} from '../../shared/movie.model';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {

    private movieList: Movie[];

    constructor(private movieService: MovieService) {
    }

  ngOnInit() {
      this.movieService.getMovies().subscribe( data => {
          this.movieList = data;
      });
  }

}
