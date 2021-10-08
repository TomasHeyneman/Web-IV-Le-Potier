import { Injectable } from '@angular/core';

import { BehaviorSubject, throwError, Observable, of, Subject, ObservedValuesFromArray, } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map, delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Keramiek } from '../models/keramiek.model';

@Injectable({
  providedIn: 'root'
})
export class KeramiekDataService {
  private _keramieks$ = new BehaviorSubject<Keramiek[]>([]);
  private _keramieks: Keramiek[];
  

   constructor(private http : HttpClient){
     this.keramieks$
     .pipe(
       catchError(err => {
         this._keramieks$.error(err);
         return throwError(err);
       })
     )
    .subscribe((keramieks : Keramiek[]) => {
      this._keramieks = keramieks;
      this._keramieks$.next(this._keramieks);
    });
   }

  get keramieks$(): Observable<Keramiek[] > {
     //Haalt het van de API 
     return this.http.get(`${environment.apiUrl}/ceramics/`).pipe(
       catchError(this.handleError),
       map((list: Keramiek[]): Keramiek[] => list.map(Keramiek.fromJSON))//any[]
     );
  }

  deleteKeramiek(keramiek : Keramiek){
    return this.http
    .delete(`${environment.apiUrl}/ceramics/${keramiek.id}`)
    .pipe(tap(console.log),
     catchError(this.handleError))
    .subscribe(() => {
      this._keramieks = this._keramieks.filter(ker => ker.id != keramiek.id);
      this._keramieks$.next(this._keramieks);
    })
  }

  getKeramiek$(id: any): Observable<Keramiek> {
    return this.http
      .get(`${environment.apiUrl}/ceramics/${id}`)
      .pipe(
       catchError(this.handleError
        ),
       map(Keramiek.fromJSON)); 
  }

  // //wordt niet gebruikt 
  // getKeramiek2$(name?: string, description? :string, color? :string) {
  //   let params = new HttpParams();
  //   params = name ? params.append('name', name) : params;
  //   params = description ? params.append('description', description) : params;
  //   params = color ? params.append('color', color) : params;
  //   return this.http.get(`${environment.apiUrl}/ceramics/`, { params }).pipe(
  //     catchError(this.handleError),
  //     map((list: any[]): Keramiek[] => list.map(Keramiek.fromJSON))
  //   );
  // } 


  get allKeramieks$(): Observable<Keramiek[]> {
    return this._keramieks$;
  }
  
  addNewKeramiek(keramiek: Keramiek) : any {
    return this.http
      .post(`${environment.apiUrl}/ceramics/`, keramiek.toJSON())
      .pipe(
        tap(console.log),
        catchError(this.handleError),
        map(Keramiek.fromJSON))
        .subscribe((ker : Keramiek) =>{
          this._keramieks = [...this._keramieks, ker];
          this._keramieks$.next(this._keramieks);
        })
      // )
      // .pipe(
      //   // temporary fix, while we use the behaviorsubject as a cache stream
      //   catchError(err => {
      //     this._keramieks$.error(err);
      //     return throwError(err);
      //   })
      // )
      // .subscribe((ker: Keramiek) => {
      //   this._keramieks = [...this._keramieks, ker];
      //   this._keramieks$.next(this._keramieks);
      // });
  }
  
  handleError(err: any): Observable<any> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else if (err instanceof HttpErrorResponse) {
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    } else {
      errorMessage = err;
    }
    console.error(err);
    return throwError(errorMessage);
  }
  
  // addNewKeramiek(keramiek : Keramiek){
  //   this._products.push(keramiek);
  // }

}
