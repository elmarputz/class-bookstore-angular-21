import { Injectable } from '@angular/core';
import { Book, Author, Image } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';

@Injectable()
export class BookStoreService {

  private api = 'https://bookstore21.putz.kwmhgb.at/api';
  

  constructor(private http: HttpClient) { }


  getAll() : Observable<Array<Book>> {
    return this.http.get(`${this.api}/books`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getSingle (isbn: string) : Observable<Book> {
    return this.http.get(`${this.api}/book/${isbn}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  remove(isbn: string) : Observable<any> {
    return this.http.delete(`${this.api}/book/${isbn}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }

}
