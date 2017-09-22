var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    // write your code here
    var itemPrice = Math.floor(Math.random() * 100);
    cart.push({[item]: itemPrice});
    console.log(`${item} has been added to your cart.`);
    return cart;
}

function viewCart() {
  // write your code here
    switch (cart.length) {
        case 0:
            console.log("Your shopping cart is empty.");
        case 1:
            var item = cart[0];
            var keys = Object.keys(item);
            var itemName = keys[0];
            var itemPrice = item.keys[0];
            console.log(`In your cart, you have ${itemName} at $${itemPrice}.`);
        case 2:
        default:
    }

    }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
