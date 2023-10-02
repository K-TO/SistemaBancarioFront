import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Projector } from '../models/projector';
import { ProjectorResponse } from '../models/projector-response';

@Injectable({
  providedIn: 'root',
})
export class ProjectionService {
  apiUrl = `${environment.apiUrl}/api`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getProjection(projectionModel: Projector): Observable<ProjectorResponse> {
    return this.http
      .post<ProjectorResponse>(
        this.apiUrl + '/simulator/make-simulation',
        JSON.stringify(projectionModel),
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
