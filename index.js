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
            let item = cart[0];
            let keys = Object.keys(item);
            let itemName = keys[0];
            let itemPrice = item[itemName];
            console.log(`In your cart, you have ${itemName} at $${itemPrice}.`);
            break;
        case 2:
            var log = "In your cart, you have ";
            for (let i = 0; i < 2; i++) {
                let item = cart[i];
                let keys = Object.keys(item);
                let itemName = keys[0];
                let itemPrice = item[itemName];
                if (i === 0) {
                    log += `${itemName} at $${itemPrice} `;
                } else {
                    log += `and ${itemName} at $${itemPrice}.`;
                }
            }
            var item = cart[0];
            var keys = Object.keys(item);
            var itemName = keys[0];
            var itemPrice = item[itemName];
            console.log(`In your cart, you have ${itemName} at $${itemPrice}.`);
            break;
        default:
            var log = "In your cart, you have ";
            for (let i = 0; i < cart.length; i++) {
                let item = cart[i];
                let keys = Object.keys(item);
                let itemName = keys[0];
                let itemPrice = item[itemName];
                if (i === cart.length - 1) {
                    log += `and ${itemName} at $${itemPrice}.`;
                } else {
                    log += `${itemName} at $${itemPrice}, `;
                }
            }
            console.log(log);
            break;
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
