import { Component, OnInit, Input } from '@angular/core';
import { Book, Author, Image } from "../shared/book";

@Component({
  selector: 'a.bs-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: []
})
export class BookListItemComponent implements OnInit {

  @Input() book: Book

  constructor() { }

  ngOnInit(): void {
  }

}
