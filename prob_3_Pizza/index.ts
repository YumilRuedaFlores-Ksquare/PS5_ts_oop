abstract class Pizza {
    abstract values:number[]
    abstract extraCheese: boolean
    abstract pepperoni:number
    abstract ham:number
    abstract pineapple: number
    abstract price:number
    abstract description:string

    getCost():number{
        let value = this.values[0] + this.values[1] * (this.pepperoni+this.ham+this.pineapple) + this.values[2]*(this.extraCheese?1:0);
        return value;
    }
    resumeOrder():void{
        return console.log(`\n ******* order summary : ******* \n Pizza ${this.description} con ${this.pepperoni+this.ham+this.pineapple} ingredients, final cost: ${this.price}`);
    };
    
}

class smallPizza extends Pizza{
    values:number[];
    extraCheese: boolean;
    pepperoni:number;
    ham:number;
    pineapple: number;
    price:number;
    description:string;
    

    constructor(extraCheese:boolean = false, pepperoni:number = 0, ham:number = 0, pineapple:number = 0 ){
        super();
        this.values = [10,2,2]; // [based price, price per topping and price for extra cheese]
        this.extraCheese = extraCheese;
        this.pepperoni = pepperoni;
        this.ham = ham;
        this.pineapple = pineapple;
        this.price = this.getCost();
        this.description = 'small';
    }

}

class mediumPizza extends Pizza{
    values:number[];
    extraCheese: boolean;
    pepperoni:number;
    ham:number;
    pineapple: number;
    price:number;
    description:string;

    
    constructor(extraCheese:boolean = false, pepperoni:number = 0, ham:number = 0, pineapple:number = 0 ){
        super();
        this.values = [12,2,4]; // [based price, price per topping and price for extra cheese]
        this.extraCheese = extraCheese;
        this.pepperoni = pepperoni;
        this.ham = ham;
        this.pineapple = pineapple;
        this.price = this.getCost();
        this.description = 'medium';

    }

}

class largePizza extends Pizza{
    values:number[];
    extraCheese: boolean;
    pepperoni:number;
    ham:number;
    pineapple: number;
    price:number;
    description:string;

    constructor(extraCheese:boolean = false, pepperoni:number = 0, ham:number = 0, pineapple:number = 0 ){
        super();
        this.values = [14,3,6]; // [based price, price per topping and price for extra cheese]
        this.extraCheese = extraCheese;
        this.pepperoni = pepperoni;
        this.ham = ham;
        this.pineapple = pineapple;
        this.price = this.getCost();
        this.description = 'large';

    }

}

class extralargePizza extends Pizza{
    values:number[];
    extraCheese: boolean;
    pepperoni:number;
    ham:number;
    pineapple: number;
    price:number;
    description:string;
    

    constructor(extraCheese:boolean = false, pepperoni:number = 0, ham:number = 0, pineapple:number = 0 ){
        super();
        this.values = [18,4,6]; // [based price, price per topping and price for extra cheese]
        this.extraCheese = extraCheese;
        this.pepperoni = pepperoni;
        this.ham = ham;
        this.pineapple = pineapple;
        this.price = this.getCost();
        this.description = 'extra-large';

    }

}

const p1 = new smallPizza(false, 1,1,1);
p1.resumeOrder();
console.log('Price...small: ', p1.getCost());

const p2 = new mediumPizza(true, 1,1,1);
p2.resumeOrder();
console.log('Price...medium: ', p2.getCost());

const p3 = new largePizza(true, 0,1,0);
p3.resumeOrder();
console.log('Price...large', p3.getCost());

const p4 = new extralargePizza(true, 1,0,1);
p4.resumeOrder();
console.log('Price...extra-large', p4.getCost());