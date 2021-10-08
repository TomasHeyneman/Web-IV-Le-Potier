
import { Keramiek } from '../models/keramiek.model';


const JsonKeramiek = [
  {
    id: 1,
    name: 'NaamKeramiek1',
    description: 'Beschrijving voor een Keramiek Product 1',
    color: 'Red',
    price: 20,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png ", 
    //categories: Categories
  },
  {
    id: 2,
    name: 'NaamKeramiek2',
    description: 'Beschrijving voor een Keramiek Product 2 ',
    color: 'Blue',
    price: 60,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png',
    //categories: Categories
  },

  {
    id: 3,
    name: 'NaamKeramiek3',
    description: 'Beschrijving voor een Keramiek Product 3 ',
    color: 'Yellow',
    price: 80,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png',
    //categories: Categories
  }
];
export const PRODUCTS: Keramiek[] = JsonKeramiek.map(Keramiek.fromJSON);
