

// 5. akta object ke define korte hobe tar modde je array ache tar modde last index ke print korte hobe ;

const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'], 
    crust: 'deep dish', 
    serves: 2

   }

   for (let i = 0; i<pizza.toppings.length; i++) {
        let element = pizza.toppings[i];
        if(element == "pepperoni") {
            console.log(element);
        }           
   }
   