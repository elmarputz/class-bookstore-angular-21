import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';

import { BookStoreService } from './shared/book-store.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { BookFormComponent } from './book-form/book-form.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './shared/authentication.service';
import { TokenInterceptorService } from './shared/token-interceptor.service';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { CustomPipe } from './shared/custom.pipe';

registerLocaleData(localeDe);

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, 
                  HttpClientModule, ReactiveFormsModule ],
  declarations: [ AppComponent, BookListComponent, BookListItemComponent, BookDetailsComponent, HomeComponent, BookFormComponent, LoginComponent, CustomPipe ],
  bootstrap:    [ AppComponent ],
  providers: [{
      provide: APP_BASE_HREF, 
      useValue: '/'}, 
     BookStoreService, 
     { provide: LOCALE_ID, useValue: 'de' },
     AuthenticationService, {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService, 
      multi: true
    }]
})
export class AppModule { }
