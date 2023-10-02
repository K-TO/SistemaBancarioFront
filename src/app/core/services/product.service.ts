import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EnableProduct } from '../models/enable-product';
import { BasicResponse } from '../models/basic-response';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = `${environment.apiUrl}/api`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  activateProduct(enableProduct: EnableProduct) : Observable<BasicResponse> {
    return this.http.post<BasicResponse>(
      this.apiUrl + '/product/create-product',
      JSON.stringify(enableProduct),
      this.httpOptions
    ).pipe(retry(1), catchError(this.handleError))
  }

  cancelProduct(customerId: string, productId: string) : Observable<BasicResponse> {
    return this.http
    .put<BasicResponse>(
      this.apiUrl + '/product/cancel-product',
      JSON.stringify({ customerId, productId }),
      this.httpOptions
    )
    .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.warn(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
