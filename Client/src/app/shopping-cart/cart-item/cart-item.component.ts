import { Component, OnInit, Input } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartDataService } from 'src/app/services/cart-data.service';
import { Observable, EMPTY } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() public cartItem : CartItem;
  
  private _fetchCartItems$: Observable<CartItem[]>;

  public apiurl = environment;
  public errorMessage = ''; 


  constructor(private _cartService : CartDataService) {
   }

  ngOnInit() {
    this._fetchCartItems$ = this._cartService.allcartItems$.pipe(
      catchError(err => {
        tap(() => console.log(this.apiurl)),
        this.errorMessage = err;
        return EMPTY;
      })
    )
  }

  get cartItems$(): Observable<CartItem[]> {
    return this._fetchCartItems$;
  }

  deleteCartItem() {
    this._cartService.deleteCartItem(this.cartItem);
  }

}
