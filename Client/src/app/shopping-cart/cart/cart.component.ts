import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { KeramiekDataService } from 'src/app/services/keramiek-data.service';
import { CartDataService } from 'src/app/services/cart-data.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { Observable, EMPTY } from 'rxjs';
import { Keramiek } from 'src/app/models/keramiek.model';
import { CartItem } from 'src/app/models/cart-item.model';
import { MessengerService } from 'src/app/services/messenger.service';
import { tap, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  cartTotal: number;
  
  private _fetchCartItems$ = new Observable<CartItem[]>();
  public errorMessage = '';

  @Input()
  public cartItem: CartItemComponent;
 

  cartItems : any = [];

  constructor(private _cartService: CartDataService, private msg: MessengerService) {
  }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription(){
    this.msg.getMsg().subscribe(() => {
     this.loadCartItems();
    })
  }

  loadCartItems(){
    this._cartService.getCartItems$().subscribe((item : CartItem[]) =>{
      this.cartItems = item;
      this.calculateCartTotal();
    })
  }

  calculateCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach((item : any)=> {
      this.cartTotal += (item.qty * item.price)
    })
  }

  get carts$(): Observable<CartItem[]> {
    return this._fetchCartItems$;
  }

  addNewItemToCart(keramiek : Keramiek){
    this._cartService.addNewItemToCart(keramiek);
  }


}
// this.carts$.pipe()
    // .subscribe((val:any) => (this.cartItem = val));
    // this._fetchCartItems$ = this._cartService.allcartItems$.pipe(
    //   tap(() => console.log('changed')),
    //   catchError(err => {
    //     this.errorMessage = err;
    //     return EMPTY;
    //   })
    // )