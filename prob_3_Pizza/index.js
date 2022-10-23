"use strict";
class Pizza {
    getCost() {
        let value = this.values[0] + this.values[1] * (this.pepperoni + this.ham + this.pineapple) + this.values[2] * (this.extraCheese ? 1 : 0);
        return value;
    }
    resumeOrder() {
        return console.log(`\n ******* Resumen de la orden: ******* \n Pizza ${this.description} con ${this.pepperoni + this.ham + this.pineapple} ingredientes, precio: ${this.price}`);
    }
    ;
}
class smallPizza extends Pizza {
    constructor(extraCheese = false, pepperoni = 0, ham = 0, pineapple = 0) {
        super();
        this.values = [10, 2, 2]; // [based price, price per topping and price for extra cheese]
        this.extraCheese = extraCheese;
        this.pepperoni = pepperoni;
        this.ham = ham;
        this.pineapple = pineapple;
        this.price = this.getCost();
        this.description = 'small';
    }
}
const p1 = new smallPizza(false, 1, 1, 1);
p1.resumeOrder();
console.log('Price...small: ', p1.getCost());
class mediumPizza extends Pizza {
    constructor(extraCheese = false, pepperoni = 0, ham = 0, pineapple = 0) {
        super();
        this.values = [12, 2, 4]; // [based price, price per topping and price for extra cheese]
        this.extraCheese = extraCheese;
        this.pepperoni = pepperoni;
        this.ham = ham;
        this.pineapple = pineapple;
        this.price = this.getCost();
        this.description = 'medium';
    }
}
const p2 = new mediumPizza(true, 1, 1, 1);
p2.resumeOrder();
console.log('Price...medium: ', p2.getCost());
class largePizza extends Pizza {
    constructor(extraCheese = false, pepperoni = 0, ham = 0, pineapple = 0) {
        super();
        this.values = [14, 3, 6]; // [based price, price per topping and price for extra cheese]
        this.extraCheese = extraCheese;
        this.pepperoni = pepperoni;
        this.ham = ham;
        this.pineapple = pineapple;
        this.price = this.getCost();
        this.description = 'large';
    }
}
const p3 = new largePizza(true, 1, 1, 1);
p3.resumeOrder();
console.log('Price...large', p3.getCost());
class extralargePizza extends Pizza {
    constructor(extraCheese = false, pepperoni = 0, ham = 0, pineapple = 0) {
        super();
        this.values = [18, 4, 6]; // [based price, price per topping and price for extra cheese]
        this.extraCheese = extraCheese;
        this.pepperoni = pepperoni;
        this.ham = ham;
        this.pineapple = pineapple;
        this.price = this.getCost();
        this.description = 'extra-large';
    }
}
const p4 = new extralargePizza(true, 1, 1, 1);
p4.resumeOrder();
console.log('Price...extra-large', p4.getCost());
