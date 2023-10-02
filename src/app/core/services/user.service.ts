import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Register } from '../models/register';
import { RegisterResponse } from '../models/register-response';
import { BasicResponse } from '../models/basic-response';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = `${environment.apiUrl}/api/Customer`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Access-Control-Allow-Origin': '*',
    }),
  };

  constructor(private http: HttpClient) {}

  registerUser(register: Register): Observable<BasicResponse> {
    return this.http
      .post<BasicResponse>(
        this.apiUrl + '/create-customer',
        JSON.stringify(register),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

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
