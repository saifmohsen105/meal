import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetApiService {
  private resSubject = new BehaviorSubject<string>('');
  res$ = this.resSubject.asObservable();
  constructor(public _http: HttpClient) {}
  setRes(newRes: string) {
    this.resSubject.next(newRes);
  }
  getData(name: string): Observable<any> {
    return this._http.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
  }
}
