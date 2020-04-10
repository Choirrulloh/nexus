import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { ClientService } from '../services/client/client.service';
import { catchError, filter, switchMap, take } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  constructor(private clientService: ClientService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedRequest = this.addAuthenticationToken(request);

    // @ts-ignore
    return next.handle(modifiedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status !== 401) {
          return throwError(error);
        }

        if (this.refreshTokenInProgress) {
          return this.refreshTokenSubject.pipe(
            filter((result) => result !== null),
            take(1),
            switchMap(() => next.handle(this.addAuthenticationToken(request)))
          );
        } else {
          this.refreshTokenInProgress = true;
          this.refreshTokenSubject.next(null);

          return this.clientService.refreshAccessToken().pipe(
            switchMap((token: any) => {
              this.refreshTokenInProgress = false;
              this.refreshTokenSubject.next(token);

              return next.handle(this.addAuthenticationToken(request));
            })
          );
        }
      })
    );
  }

  private addAuthenticationToken(request: HttpRequest<any>) {
    const token = this.clientService.accessToken;

    if (!token) {
      return request;
    }

    if (request.headers.has('Authorization')) {
      return request;
    }

    return request.clone({
      headers: request.headers.append('Authorization', `Bearer ${token}`),
    });
  }
}
