class Carte {
    constructor(titlu, autor, editure, anAparirie, nrPagini){
        this.titlu= titlu;
        this.autor= autor;
        this.editure= editure ;
        this.anAparirie= anAparirie ;
        this.nrPagini= nrPagini;
    }
    afiseazaDitale(){
        console.log(`Titlu este ${this.titlu + ' Autor este '+ this.autor} + 'Editure este `+ this.editure)
    }
   
}