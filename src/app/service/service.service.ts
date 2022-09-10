import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  searchMathFact(number:string):Observable<any[]> {
    var filter = `${environment.baseUrlAPI}${number}/math?fragment=true&json=true`;
    return (this.http.get<any[]>(filter))
  }

  searchTriviaFact(number:string):Observable<any[]> {
    var filter = `${environment.baseUrlAPI}${number}/trivia?fragment=true&json=true`;
    return (this.http.get<any[]>(filter))
  }

  searchYearFact(year:string):Observable<any[]> {
    var filter = `${environment.baseUrlAPI}${year}/year?fragment=true&json=true`;
    return (this.http.get<any[]>(filter))
  }

  searchDateFact(month:string, day:string):Observable<any[]> {
    var filter = `${environment.baseUrlAPI}${month}/${day}/date?fragment=true&json=true`;
    return (this.http.get<any[]>(filter))
  }

  
}

