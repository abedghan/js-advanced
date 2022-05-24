class product {
    static sale = 0 ;
    name ;
    price;
    percent ;

    constructor (name,price,percent=10) {
        this.name = name;
        if (product.sale==1) {
            this.price = price-(price*percent)/100;

        }else{
           this.price = price; 
        }
        
        this.percent = percent;
    }
    static ordrByPrice(a,b){
        return a.price-b.price;
    }
}
export {product}