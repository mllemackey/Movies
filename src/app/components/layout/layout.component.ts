import { Component } from '@angular/core';
import {MovieService} from '../../shared/services/movie.service';
import {Movie} from '../../shared/movie.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent {

  constructor(private movieService: MovieService, private router: Router) { }
  private searchTerm: string;

  search(searchTerm: string){
      this.router.navigate(['./search', searchTerm]);
  }


}
