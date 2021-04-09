
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from "@angular/forms";
import { BookFactory } from '../shared/book-factory';
import { BookStoreService } from "../shared/book-store.service";


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


  constructor(
    private fb: FormBuilder, 
    private bs: BookStoreService, 
    private route: ActivatedRoute, 
    private router: Router


  ) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({

      
    });
  }

}
