import { HttpClient } from '@angular/common/http';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {Observable} from 'rxjs';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8084/api/user';

  constructor(private http: HttpClient,
              @Inject(PLATFORM_ID) private platformId: Object) { }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }
  saveToken(token: string){
    if(isPlatformBrowser(this.platformId)){
    localStorage.setItem('token', token);
    }
  }

  getToken(): string | null {
      if(isPlatformBrowser(this.platformId)){
        return localStorage.getItem('token');
      }
      return null;
  }

  isAuthenticated(): boolean{
    if(!isPlatformBrowser(this.platformId)){
      return false;
    }
    return !!this.getToken();
  }

  logout(){
    if(isPlatformBrowser(this.platformId)){
    localStorage.removeItem('token');
    }
  }

}
