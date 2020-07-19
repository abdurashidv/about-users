import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {catchError, retry} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // this.router.navigate(['/login']);
        }
        return throwError(error);
      })
    );
  }
}
