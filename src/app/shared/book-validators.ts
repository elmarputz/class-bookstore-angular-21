import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { BookStoreService } from './book-store.service';
import {map} from 'rxjs/operators';



export class BookValidators {

    static isbnExists(bs : BookStoreService) {
        return function(control: FormControl): Observable<{[error: string]: any}> {
            return bs.check(control.value)
                .pipe(map(exists => !exists ? null : {isbnExists: {valid: false }}));


        }
    }

}
 