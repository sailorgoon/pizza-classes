class Pizza {
    constructor(toppings){
        this.price = 10;
        this.toppings = toppings;
        if( this.toppings.length == 0){
            this.toppings = ['cheese'];
        }
    }
    increasePrice(){
        this.price += 0.99 * this.toppings.length - 1;
    }
}

const pizza1 = new Pizza(['pepperoni', 'sausage', 'pineapple']);
const pizza2 = new Pizza([]);

pizza1.increasePrice();
pizza2.increasePrice();

console.log(pizza1);
console.log(pizza2);


