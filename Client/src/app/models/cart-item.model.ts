import { CartItemComponent } from '../shopping-cart/cart-item/cart-item.component';
import { Keramiek } from './keramiek.model';

interface CartJson {
  id: number;
  price: number;
  name: string;
  keramiek: Keramiek;
  qty: number;
}

export class CartItem {
  cartItems: any;
  constructor(
      private _id: number,
      private _price: number,
      private _name : string,
      private  _keramiek?: Keramiek,
      private _qty = 1,
     ) {
       this._id = _id;
       this._price = _price;
       this._name = _name;
       this._keramiek = _keramiek;
       this._qty = _qty;
     }

     static fromJSON(json: CartJson): CartItem {
      const cart = new CartItem(
        json.id,
        json.price,
        json.name,
        json.keramiek,
        json.qty,
      );
      cart._id = json.id;
      return cart;
    }
  get id(): number {
    return this._id;
  }

  get name(): string{
    return this._name;
  }

  // get keramiek(): Keramiek{
  //   return this._keramiek;
  // }

  get qty(): number {
    return this._qty;
  }

  set qty(qty : number){
    this._qty = qty;
  } 

  get price(): number {
    return this._price;
  }

}
