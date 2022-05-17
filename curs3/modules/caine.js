import {animal} from '../modules/animal.js'
class caine extends animal{
    cainerau;
    constructor(grautate,rau){
        super(grautate);
        this.cainerau = rau ;
    }
    musca(){
        if(this.cainerau){
            console.log('Atentie caine rau')
        }else{
            console.log('nu ai rau')
        }
    }
    
}
export {caine}