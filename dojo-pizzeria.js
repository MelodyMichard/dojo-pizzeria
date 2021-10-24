function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

let pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(pizza1);

let pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

let pizza3 = pizzaOven("hand tossed", "white sauce", ["feta", "parmesan", "goat cheese"], ["chicken", "green onions", "mushrooms"]);
console.log(pizza3);

let pizza4 = pizzaOven("thin and crispy", "buffalo", "blue cheese", ["chicken", "green onions"]);
console.log(pizza4);

let crustTypes = [
    "deep dish",
    "hand tossed",
    "thin and crispy",
];

let sauceTypes = [
    "traditional",
    "marinara",
    "bbq",
    "white sauce",
    "buffalo"
];

let cheeses = [
    "mozzarella",
    "cheddar",
    "feta",
    "blue cheese",
    "goat cheese",
    "parmesan",
];

let toppings = [
    "pepperoni",
    "sausage",
    "chicken",
    "olives",
    "bell peppers",
    "onions",
    "mushrooms",
    "anchovies",
    "green onions"
];


