import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../shared/services/movie.service';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../../shared/movie.model';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html'
})
export class SearchPageComponent implements OnInit {

    private movies: Movie[] = [];

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe(() => {
          let term = this.route.snapshot.paramMap.get('term');
            console.log(term);
            this.movieService.searchMovie(term)
              .subscribe(result => {
                    this.movies = result;
              });
      });
  }

}
