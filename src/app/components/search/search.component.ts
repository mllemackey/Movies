import {Component, Output, OnInit, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

    constructor(private router: Router) { }

    @Output() onSubmit = new EventEmitter<any>();

    search(searchTerm) {
        this.onSubmit.emit(searchTerm);

    }

  ngOnInit() {
  }

}
