import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BookListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
