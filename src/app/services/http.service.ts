import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable()
export class HttpService {

  private readonly  loginHeaders: HttpHeaders = new HttpHeaders({
    'Accept' : 'application/json',
    'Content-Type' : 'application/json',
    'X-CSRFToken' : 'jlc7gmL0eDUvh4x2n2izKouWhpRsGbF9RTUTUMx3FgXZgtgFO69Lab6zb8OeEHHC'
  });

  private readonly  headers: HttpHeaders = new HttpHeaders({
    'Accept' : 'application/json',
    'X-CSRFToken' : 'jlc7gmL0eDUvh4x2n2izKouWhpRsGbF9RTUTUMx3FgXZgtgFO69Lab6zb8OeEHHC',
    'Authorization' : 'Token ' + localStorage.getItem('token')
  });

  private readonly apiurl = 'http://emphasoft-test-assignment.herokuapp.com/api/v1/';
  private readonly loginurl = 'http://emphasoft-test-assignment.herokuapp.com/api-token-auth/';

  constructor(private http: HttpClient) { }

  postForLogin(body: any = {}): any {
    return this.http
      .post<any>(this.loginurl, body, {headers: this.loginHeaders})
      .pipe(
        catchError(error => {
          if (error.status === 404) {
            return throwError({message: 'User does not exist. Please, check your login and password.'});
          }
          return null;
        })
      );
  }

  get(url: string, params: any = {}): Observable<any> {
    return this.http.get<any>(this.apiurl + url, { headers: this.headers });
  }

  post(url: string, body: any = {}): Observable<any> {
    return this.http.post<any>(this.apiurl + url, body, {headers: this.headers});
  }

  put(url: string, body: any = {}): Observable<any> {
    return this.http.put<any>(this.apiurl + url, body, {headers: this.headers});
  }

  delete(url: string, body: any = {}): Observable<any> {
    return this.http.delete<any>(this.apiurl + url, {headers: this.headers});
  }
}
