class animal {
    #familie;
    #mancare;
    #culoare
    greutate;
    static nrPicioare;
    static nrOchi
    constructor(greutate){
        this.greutate = greutate ;
    }
get greutate(){
    return this.greutate
}
set greutate(gr){
    this.greutate = gr;
}
get familie (){
    return this.#familie
}
set familie (fam){
    return this.#familie = fam;
}

get mancare (){
    return this.#mancare
}
set mancare (man){
    return this.#mancare = man;
}
get culoare (){
    return this.#culoare
}
set culoare (cul){
    return this.#culoare = cul;
}
mananca(calorii){
    this.greutate = this.greutate + calorii
    console.log(`calorii consumate ${calorii} si grautatea actuale este ${this.greutate}`)
}
doarme (ore){
    console.log(`animalul doarme ${ore} pe zii`)
}
comunica(mesaj){
    console.log(mesaj)
}
}
export{animal}