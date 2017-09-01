import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
      FormsModule
  ],
  declarations: [

  ],
    exports: [
        FormsModule
    ]
})
export class SearchModule { }
