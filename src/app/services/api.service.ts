import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseURL = 'https://api.arasaac.org/api/';

  constructor(private http: HttpClient) {}

  getPictogramsByCategory(categoria: string): Observable<any> {
    return this.http.get(this.baseURL + 'pictograms/es/search/' + categoria);
  }
  getPictogramById(id: string): Observable<any> {
    return this.http.get(this.baseURL + 'pictograms/es/' + id);
  }
}
