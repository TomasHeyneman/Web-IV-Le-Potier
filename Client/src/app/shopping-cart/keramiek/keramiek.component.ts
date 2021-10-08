import { Component, OnInit, Input } from '@angular/core';
import { KeramiekDataService } from 'src/app/services/keramiek-data.service';
import { Observable, EMPTY } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CartDataService } from 'src/app/services/cart-data.service';
import { Keramiek } from 'src/app/models/keramiek.model';
import { MessengerService } from 'src/app/services/messenger.service';
import { environment } from 'src/environments/environment';
import { CartItem } from 'src/app/models/cart-item.model';
import { WishlistDataService } from 'src/app/services/wishlist-data.service';


@Component({
  selector: 'app-keramiek',
  templateUrl: './keramiek.component.html',
  styleUrls: ['./keramiek.component.css']
})
export class KeramiekComponent implements OnInit {

  private _fetchKeramieks$: Observable<Keramiek[]>;
  public errorMessage = ''; 
  public apiurl = environment.imgApi;
  @Input()
  public keramiek: Keramiek;

  @Input()
  public cartItem : CartItem;

  addedToWishlist: boolean = false;

  constructor(private _keramiekService: KeramiekDataService, 
    private _cartService : CartDataService, 
    private _msg : MessengerService,
    private _wishList: WishlistDataService) {
  }

  ngOnInit(): void {
    this._fetchKeramieks$ = this._keramiekService.allKeramieks$.pipe(
      tap(() => console.log('changed')),
      tap(() => console.log(this.apiurl)),
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    )
  }

  get keramieks$(): Observable<Keramiek[]> {
    return this._fetchKeramieks$;
  }

  deleteKeramiek() {
    this._keramiekService.deleteKeramiek(this.keramiek);
  }

  addNewKeramiek() {
    this._keramiekService.addNewKeramiek(this.keramiek);
  }

  handleAddToCart(){
    this._cartService.addNewItemToCart(this.keramiek).subscribe(() => {
      this._msg.sendMsg(this.keramiek);
    })
  }

//Werkt niet
  handleAddToWishList(){
    this._wishList.addToWishList(this.keramiek.id).subscribe(() => {
      this.addedToWishlist = true;
    });
  }
  
//Werkt niet
  handleRemoveFromWishList(){
    this._wishList.removeFromWishList(this.keramiek.id).subscribe(() =>{
      this.addedToWishlist = false;
    })
  }
}
