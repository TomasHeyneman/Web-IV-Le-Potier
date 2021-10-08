import { Injectable } from '@angular/core';
import { Subject, throwError, BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, catchError, map, shareReplay } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CartItemComponent } from '../shopping-cart/cart-item/cart-item.component';
import { Keramiek } from '../models/keramiek.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {
 
  private _carts$ = new BehaviorSubject<CartItem[]>([]);
  private _carts: CartItem[];
  // public cartItems: any;

  constructor(private http : HttpClient) { 
    this.cartItems$
      .pipe(
        catchError(err => {
          // temporary fix, while we use the behaviorsubject as a cache stream
          this._carts$.error(err);
          return throwError(err);
        })
      )
      .subscribe((carts: CartItem[]) => {
        this._carts = carts;
        this._carts$.next(this._carts);
      });
  }

  getCartItems$(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`${environment.apiUrl}/carts/`).pipe(
      map((resultList : any[]) => {
        
        let cartItems : CartItem[] = [];
      for (let item of resultList) {
        let productExists = false
        
         //met counter, maar werkt niet 
          // for (let i in cartItems) {
          //   if (cartItems[i].id === item.cartItems.id) {
          //     cartItems[i].qty++
          //     productExists = true
          //     break;
          //   }
          // }
          
        // for (let item of resultList) {
          // let productExists = false
          
           if (!productExists) {
            cartItems.push(new CartItem(item.id, item.price,item.name,item.keramiek,item.qty));
           }
        }
        return cartItems;
      })
    );
  }

  //Send message
  addNewItemToCart(keramiek : Keramiek): Observable<any>{
    return this.http.post(`${environment.apiUrl}/carts/`, {id: keramiek.id, name: keramiek.name, qty: 1}/*JSON.stringify({id : keramiek.id, qty : 1})*/);
  }

  deleteCartItem(cartItem: CartItem) {
    return this.http
    .delete(`${environment.apiUrl}/carts/${cartItem.id}`)
    .pipe(tap(console.log),
      catchError(this.handleError))
     .subscribe(() => {
      this._carts = this._carts.filter(cart => cart.id != cart.id);
      this._carts$.next(this._carts);
    })
  }

  get allcartItems$(): Observable<CartItem[]> {
    return this._carts$;
  }

  get cartItems$(): Observable<CartItem[]> {
    return this.http.get(`${environment.apiUrl}/ceramics/`).pipe(
      tap(console.log),
      shareReplay(1),
      catchError(this.handleError),
      map((list: any[]): CartItem[] => list.map(CartItem.fromJSON))
    );
  }


  handleError(err: any): any {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else if (err instanceof HttpErrorResponse) {
      console.log(err);
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    } else {
      errorMessage = err;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}






