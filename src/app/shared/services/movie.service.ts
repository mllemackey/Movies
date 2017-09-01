import { Injectable } from '@angular/core';
import { Movie } from '../movie.model';
import { forEach } from '@angular/router/src/utils/collection';
import { movies } from '../examples';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {element} from 'protractor';

@Injectable()
export class MovieService {

    private movieList: Movie[] = [];


    constructor() {
    }

    public getMovies() {
        movies.forEach(element => {
            this.movieList.push(new Movie(element.id, element.name, element.director,
                element.imageUrl, element.duration, new Date(element.releaseDate),
                element.genres));
        });
        return new Observable((o: Observer<any>) => {
            o.next(this.movieList);
        });
    }

}