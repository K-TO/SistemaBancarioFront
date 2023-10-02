import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { Product } from "../models/product";

@Injectable({
    providedIn: 'root',
})

export class CustomerService {

    apiUrl = `${environment.apiUrl}/api`;
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    constructor(private http: HttpClient) {}

    getCustomerProducts(customerId: string): Observable<Product[]>{
        return this.http.get<Product[]>(this.apiUrl + '/customer/customer-products?customerId=' + customerId);
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