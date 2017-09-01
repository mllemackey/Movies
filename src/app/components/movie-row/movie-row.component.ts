import {Component, Input, Output} from '@angular/core';
import { Movie } from '../../shared/movie.model';

@Component({
  selector: '[movieRow]',
  templateUrl: './movie-row.component.html'
})
export class MovieRowComponent {


    @Input() movieRow: Movie;

    constructor() { }
    private movie: Movie;

}
