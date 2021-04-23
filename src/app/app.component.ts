import { ThrowStmt } from '@angular/compiler';
import { Component, VERSION } from '@angular/core';
import { AuthenticationService } from './shared/authentication.service';

import { Book } from './shared/book';

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html'
})

export class AppComponent  {
  
    constructor (private authService : AuthenticationService) { }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  getLoginLabel() {
    return this.isLoggedIn() ? "Logout" : "Login";
  }

}
