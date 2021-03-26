import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'bs-root',
  template: '<bs-book-list></bs-book-list>',
  styleUrls: []
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
