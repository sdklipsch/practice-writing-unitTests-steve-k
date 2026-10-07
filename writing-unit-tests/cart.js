cart = []

function addItem(cart, item, quantity) {
    cart.push({item, quantity});
    return cart;
}

function removeItem(cart, item) {
    const index = cart.findIndex(cartItem => cartItem.item === item.toLowerCase());

    if (index === -1) {
        return "The item is not in the cart";
    }

    cart.splice(index, 1);

    return cart;
}

function getTotalItems(cart) {
    let cartTotal = 0;

    for (let item of cart) {
        cartTotal += item.quantity;
    }

    return cartTotal;
}

module.exports = { addItem , removeItem, getTotalItems};