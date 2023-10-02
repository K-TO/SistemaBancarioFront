import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Report } from '../models/report';
import { Dashboard } from '../models/dashboard';
import { AverageReportResponse } from '../models/average-report';
import { TopCustomersReport } from '../models/top-customers-report';
import { TopReport } from '../models/TopReport';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  
  apiUrl = `${environment.apiUrl}/api`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Access-Control-Allow-Origin': '*',
    }),
  };

  constructor(private http: HttpClient) {}

  getAverageProductsReport(productType: number): Observable<AverageReportResponse[]> {
    return this.http
      .post<AverageReportResponse[]>(
        this.apiUrl + '/report/report-averagebalance',
        JSON.stringify({ productType }),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  getTopCustomersReport(): Observable<TopReport> {
    return this.http
      .post<TopReport>(
        this.apiUrl + '/report/report-topcustomers',
        JSON.stringify({  }),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  getDashboardReport(fechaInicial: Date, fechaFinal: Date): Observable<Dashboard> {
    return this.http
      .post<Dashboard>(
        this.apiUrl + '/Recaudo/dashboard',
        JSON.stringify({ fechaInicial, fechaFinal }),
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
