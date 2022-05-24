import { product}from '../module/product.js';
import { Book } from '../module/Book.js';
import { Basket}from '../module/Basket.js';
console.log(typeof product)
product.sale = 1;
const bread = new product ('bread' ,8);

const water = new product ('water' ,3.25);

const faust = new Book ('faust',12.5,10,'Goethe')

const products =[
    new product ('product1',22),
    new product ('product2',33),
    new product ('product3',18),
    new product ('product4',101),
    new product ('product5',39),
];
const cos = new Basket();
cos.addProduct(3, bread);
cos.addProduct(2,water);
console.log(cos);
cos.printShoppingInfo();
