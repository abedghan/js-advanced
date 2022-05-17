import{leu} from '../modules/leu.js'
import{caine} from '../modules/caine.js'
import{animal} from '../modules/animal.js'

const animal = new animal(0.3);
animal.comunica('oac oac');
const leu = new leu(200,2);
leu.comunica('Uauuuu');

const caine = new caine(3,true);
caine.comunica('hau')
caine.musca();