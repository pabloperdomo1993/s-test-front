import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class TokenInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token = localStorage.getItem('accessToken');
    const accessToken = token?.replace(/"/g, '');

    const clonedRequest = request.clone({
        setHeaders: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
    });
    return next.handle(clonedRequest);
  }
};
