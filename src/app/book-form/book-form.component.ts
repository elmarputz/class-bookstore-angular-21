
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from "@angular/forms";
import { BookFactory } from '../shared/book-factory';
import { BookStoreService } from "../shared/book-store.service";
import { BookFormErrorMessages } from "./book-form-error-messages";
import { ThrowStmt } from "@angular/compiler";


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  bookForm : FormGroup;
  book = BookFactory.empty();
  isUpdatingBook = false; 
  images: FormArray;
  errors: { [key: string]: string } = {};


  constructor(
    private fb: FormBuilder, 
    private bs: BookStoreService, 
    private route: ActivatedRoute, 
    private router: Router


  ) { }

  ngOnInit(): void {

    const isbn = this.route.snapshot.params["isbn"];
    if (isbn) {
      this.isUpdatingBook = true;
      this.bs.getSingle(isbn).subscribe(book => {
        this.book = book;
        this.initBook();
      });
    }

    this.initBook();
  }

  initBook() {
    this.bookForm = this.fb.group({
      id: this.book.id,  
      title: [this.book.title, Validators.required], 
      subtitle: this.book.subtitle, 
      isbn: [
        this.book.isbn, [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(13)

        ]
      ], 
      description: this.book.description,
      published: this.book.published, 

    });

    this.bookForm.statusChanges.subscribe(() => 
      this.updateErrorMessages()
    );
  }

  updateErrorMessages() {
    console.log("form invalid? " + this.bookForm.invalid);
   
    this.errors = {};

    for (const message of BookFormErrorMessages) {
      const control = this.bookForm.get(message.forControl); 

      if (
        control && 
        control.dirty && 
        control.invalid && 
        control.errors[message.forValidator] && 
        !this.errors[message.forControl] 
      ) {
        this.errors[message.forControl] = message.text;
      }

    }

  }

}
