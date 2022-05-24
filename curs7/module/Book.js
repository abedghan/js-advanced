import {product}from './product.js';
class Book extends product{
author;
constructor(name, price,author,percent){
    super(name, price,percent);
    this.author = author;
}
}
export{Book}