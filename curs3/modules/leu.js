import {animal} from '../modules/animal.js'
class leu extends animal{
    constructor(greutate, lungime){
        super(greutate);
        this.lungime = lungime;
    }
    vaneaze(){
        console.log(`cand nu doarme vaneaze`)
    }
}
export {leu}