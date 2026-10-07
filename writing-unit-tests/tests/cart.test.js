const { addItem, removeItem, getTotalItems } = require("../cart");

describe("Test cases for addItem function", function() {
    test("Adding one item and quantity to an empty array", function() {
        const cart = [];
        expect(addItem(cart, "apple", 1)).toEqual([{"item": "apple", "quantity": 1}]);
    });

    test("Adding second item and quantity to an array", function() {
        const cart = [{item: "apple", quantity: 1}];
        expect(addItem(cart, "banana", 5)).toEqual([{"item": "apple", "quantity": 1}, {"item": "banana", "quantity": 5}]);
    });
    
    test("Adding an item with an empty name", function() {
        const cart = [];
        expect(addItem(cart, "", 2)).toEqual([{ "item": "", "quantity": 2 }]);
    });

    test("Adding an item with a negative quantity", function() {
        const cart = [];
        expect(addItem(cart, "grapes", -1)).toEqual([{ "item": "grapes", "quantity": -1 }]);
    });
    
    test("Empty cart", function() {
        const cart = [];
        expect(addItem(cart)).toEqual([{"item": undefined, "quantity": undefined}]);
    });

    test("Adding an items with a large quantity to the cart", function() {
        const cart = [];
        expect(addItem(cart, "raisins", 10000)).toEqual([{ "item": "raisins", "quantity": 10000 }]);
    });
});

describe("Test cases for removeItem function", function() {
    test("Removing one item and quantity from the cart", function() {
        const cart = [{item: "apple", quantity: 1}, {item: "banana", quantity: 5}];
        expect(removeItem(cart, "apple")).toEqual([{"item": "banana", "quantity": 5}]);
    });

    test("Removing one item and quantity from a single item cart", function() {
        const cart = [{item: "apple", quantity: 1}];
        expect(removeItem(cart, "apple")).toEqual([]);
    });

    test("Removing an empty string from an empty cart", function() {
        const cart = [{item: "apple", quantity: 1}, {item: "banana", quantity: 5}];
        expect(removeItem(cart, "")).toEqual("The item is not in the cart")
    })

    test("Removing an item from an empty cart", function() {
        const cart = [];
        expect(removeItem(cart, "strawberries")).toEqual("The item is not in the cart")
    })

    test("Removing an item from a cart when the item doesn't exist", function() {
        const cart = [{item: "apple", quantity: 1}, {item: "banana", quantity: 5}];
        expect(removeItem(cart, "strawberries")).toEqual("The item is not in the cart")
    })

    test("Removing an item from a cart when the item has capital letters", function() {
        const cart = [{item: "apple", quantity: 1}, {item: "banana", quantity: 5}, {item: "grapes", quantity: 100}];
        expect(removeItem(cart, "Grapes")).toEqual([{"item": "apple", "quantity": 1}, {"item": "banana", "quantity": 5}])
    })
});

describe("Test cases for getTotalItems function", function() {
    test("Summing the total for single items", function() {
        const cart = [{item: "apple", quantity: 1}];
        expect(getTotalItems(cart)).toEqual(1);
    });

    test("Summing the total for multiple items", function() {
        const cart = [{item: "apple", quantity: 1}, {item: "banana", quantity: 5}];
        expect(getTotalItems(cart)).toEqual(6);
    });

    test("Summing the total when there is an item with a negative number", function() {
        const cart = [{item: "apple", quantity: 1}, {item: "grapes", quantity: -1 }, {item: "banana", quantity: 5}];
        expect(getTotalItems(cart)).toEqual(5);
    });

    test("Summing the total when an item has an empty quantity", function() {
        const cart = [{item: "apple", quantity: 1}, {item: "grapes", quantity: undefined}];
        expect(getTotalItems(cart)).toEqual(NaN);
    });

    test("Summing the total when there is an item with a large quantity", function() {
        const cart = [{item: "apple", quantity: 1}, {item: "grapes", quantity: 8 }, {item: "banana", quantity: 5}, {item: "raisins", quantity: 10000}];
        expect(getTotalItems(cart)).toEqual(10014);
    });

    test("Summing the total for empty cart", function() {
        const cart = [];
        expect(getTotalItems(cart)).toEqual(0);
    });
});

