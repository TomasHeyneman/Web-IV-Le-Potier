
interface KeramiekJson {
  id: number;
  name: string;
  description: string;
  color: string;
  price: number;
  imageUrl: string;
 //category : Category;
}
export class Keramiek {
  static id: any;
  constructor(
    private _id: number,
    private _name: string,
    private _description: string,
    private _color: string,
    private _price: number,
    private _imageUrl: string,
     //category : Category;
  ) {}
  
  static fromJSON(json: KeramiekJson): Keramiek {
    const keramiek = new Keramiek(
      json.id ,
      json.name,
      json.description ,
      json.color ,
      json.price,
      json.imageUrl,
     //json.category
    );
    return keramiek;
  }

  toJSON(): KeramiekJson {
     return {id : this.id, imageUrl : this.imageUrl, price : this.price, name: this.name, description : this.description, color : this.color}
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get color(): string {
    return this._color;
  }

  get price(): number {
    return this._price;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  // get categories():Categories{
  //   return this._categories;
  // }

  //methodes ...
  // addKeramiek(id?: number,
  //    name: string,
  //    description?: string,
  //    color?: string,
  //    price?: number,
  //    imageUrl?: string) {
  //   this._keramiek.push(new Keramiek(id, name, description,color,price,imageUrl));
}
