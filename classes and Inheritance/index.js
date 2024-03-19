class Electronics{
    #input;
    #output;
    #name;
    constructor(input, output, name){
        this.#input = input;
        this.#output = output;
        this.#name = name;
    }

    print(){
        console.log(this.#input);
        console.log(this.#output);
        console.log(this.#name);
    }
}

class Charger extends Electronics{
    #plugType;
    constructor(input, output, name, plugType){
        super(input, output, name);
        this.#plugType = plugType;
    }
    get chargerType(){
        console.log(this.#plugType);
    }
}

const asusCharger = new Charger(18, 20, "Asus Fast Charger", "C-Type");

asusCharger.print();
asusCharger.chargerType;