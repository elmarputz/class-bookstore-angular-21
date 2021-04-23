import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

interface Token {
  exp: number;
  user: {
    id: string;
  }
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private api:string = 'https://bookstore21.putz.kwmhgb.at/api/auth';

  constructor(private http: HttpClient) { }

  login (email: string, password: string) {
    return this.http.post(`${this.api}/login`, {
      email: email,
      password: password
    });
  }

  public setLocalStorage (token: string) {
    console.log("storing stoken");
   
    const decodedToken = jwt_decode(token) as Token;
    console.log(decodedToken.user.id);
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("userId", decodedToken.user.id);

  }

  public getCurrentUserId() {
    return Number.parseInt(sessionStorage.getItem("userId"));
  }

  logout() {
    this.http.post(`${this.api}/logout`, {});
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    console.log("logged out");
  }

  public isLoggedIn() {

    if (sessionStorage.getItem("token")) {
      let token: string = sessionStorage.getItem("token");
      const decodedToken = jwt_decode(token) as Token;
      let expirationDate: Date = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp);
      if (expirationDate < new Date()) {
        console.log("token expired");
        sessionStorage.removeItem("token");
        return false;
      }
      return true;
    } else {
      return false; 
    }

  }

  public isLoggedOut() {
    return !this.isLoggedIn();
  }

}
