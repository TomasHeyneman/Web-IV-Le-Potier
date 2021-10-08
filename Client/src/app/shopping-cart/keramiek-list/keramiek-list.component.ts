import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-keramiek';
import { KeramiekDataService } from 'src/app/services/keramiek-data.service';
import { Subject, Observable, never, EMPTY } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  tap,
  map,
  catchError
} from 'rxjs/operators';
import { Keramiek } from 'src/app/models/keramiek.model';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-keramiek-list',
  templateUrl: './keramiek-list.component.html',
  styleUrls: ['./keramiek-list.component.css']
})
export class KeramiekListComponent implements OnInit {
  //productList: Keramiek[] = PRODUCTS;
  public keramieks : Keramiek[];
  public filterKeramiekName: string = '';
  public filterKeramiek$ = new Subject<string>();
  private _fetchKeramieks$: Observable<Keramiek[]>;

// public filterKeramiekName = '';

  public errorMessage: string = '';

  constructor(private _keramiekService: KeramiekDataService, private translate: TranslateService,private _router: Router,
    private _route: ActivatedRoute) {
    this.filterKeramiek$
      .pipe(tap(console.log),
      debounceTime(400),
      distinctUntilChanged(),
      map(t => t.toLowerCase())
      )
      .subscribe((val: string) => (this.filterKeramiekName = val));

      translate.addLangs(['en', 'nl']);
      translate.setDefaultLang('en');
  }

  useLanguage(language: string){
    this.translate.use(language);
    console.log(this.translate.use(language))
  }

  ngOnInit(): void {
   this._fetchKeramieks$ = this._keramiekService.allKeramieks$.pipe(
      tap(() => console.log('changed')),
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );


    // this.filterKeramiek$
    // .pipe(
    //   distinctUntilChanged(),
    //   debounceTime(250)
    // )
    // .subscribe(val => {
    //   const params = val ? { queryParams: { filter: val } } : undefined;
    //   this._router.navigate(['/keramiek/list'], params);
    // });
    // this._route.queryParams.subscribe(params => {
    //   this._keramiekService
    //     .getKeramiek2$(params['filter'])
    //     .pipe(
    //       catchError((err) => {
    //         this.errorMessage = err;
    //         return EMPTY;
    //       })
    //     )
    //     .subscribe(val => (this.keramieks = val));
    //   if (params['filter']) {
    //     this.filterKeramiekName = params['filter'];
    //   }
    // });

  }

  get keramieks$(): Observable<Keramiek[]> {
    return this._fetchKeramieks$;
  }
}
