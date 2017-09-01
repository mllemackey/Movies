import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import {SearchPageComponent} from './components/search-page/search-page.component';

const appRoutes: Routes = [
    {
        path: '',
        component: MoviesComponent
    },
    {
        path: 'search/:term',
        component: SearchPageComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}