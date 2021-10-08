import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Keramiek } from '../models/keramiek.model';
import { KeramiekDataService } from '../services/keramiek-data.service';

@Injectable({
  providedIn: 'root'
})
export class KeramiekResolver implements Resolve<Keramiek> {

  constructor(private keramiekService: KeramiekDataService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Keramiek> {
    return this.keramiekService.getKeramiek$(route.params['id']);
  }
}
