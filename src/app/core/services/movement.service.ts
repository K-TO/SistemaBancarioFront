import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { Movement } from "../models/movement";

@Injectable({
    providedIn: 'root'
})

export class MovementService {
    apiUrl = `${environment.apiUrl}/api`;
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    constructor(private http: HttpClient) {}

    getCustomerMovements(customerId: string): Observable<Movement[]>{
        return this.http.get<Movement[]>(this.apiUrl + '/movement/get-movements?customerId=' + customerId);
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