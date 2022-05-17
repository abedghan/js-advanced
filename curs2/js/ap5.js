// importam modulele
import {Carte, Manual} from '../modules/Carte.js';

let carte = new Carte('Poezii', 'George Bacovia');
console.log(carte);
carte.toString();
carte.deschidCartea();

carte.titlu='Ion';

let manual = new Manual('Limba Romana', 'Necunoscut', 25);
console.log(manual);
manual.deschidCartea();
manual.toString();
manual.nrbucati=27;
manual.getComanda();

