import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
//Werkt niet 
export class WishlistDataService {

  constructor(private http: HttpClient) { }

  getWishList(){

  } 

  addToWishList(keramiekId){
    return this.http.post(`${environment.apiUrl}/wishlists/`, JSON.stringify({id: keramiekId}) )
  }

  removeFromWishList(keramiekId){
    return this.http.delete(`${environment.apiUrl}` + '/' + keramiekId )
  }



}
