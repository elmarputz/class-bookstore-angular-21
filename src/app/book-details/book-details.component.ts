import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'bs-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: []
})
export class BookDetailsComponent implements OnInit {

  book : Book

  constructor(
    private bs: BookStoreService,
    private route: ActivatedRoute, 
    private router: Router,
    private authService : AuthenticationService
  ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;  
    this.bs.getSingle(params['isbn'])
      .subscribe(b => this.book = b);
  }

  getRating (num: number) {
    return new Array(num);
  }


  removeBook() {
    if (confirm('Buch löschen? Sind Sie sicher?')) {
      this.bs.remove(this.book.isbn) 
        .subscribe(res => this.router.navigate(['../'], { relativeTo: this.route }));

    }
  }

}
