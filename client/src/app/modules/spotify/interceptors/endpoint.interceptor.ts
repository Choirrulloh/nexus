import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EndpointInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const url = request.url.startsWith('http') ? request.url : `https://api.spotify.com/v1${request.url}`;

    const modifiedRequest = request.clone({
      url,
    });

    return next.handle(modifiedRequest);
  }
}
