// Test of the shopping cart objects

// 1. Create products
const baskets = new Product(1, "Baskets", 100);
const socks = new Product(2, "Socks", 20);
const bag = new Product(3, "Bag", 50);

// 2. Create a shopping cart
const cart = new ShoppingCart();

// 3. Add items to the cart
cart.addItem(baskets, 2); // 2 baskets
cart.addItem(socks, 3); // 3 socks
cart.addItem(bag); // 1 bag (default quantity)
cart.addItem(baskets, 1); // add one more basket -> existing line becomes 3

// 4. Display the cart
console.log("--- Cart content ---");
cart.displayCart();

// 5. Remove an item from the cart (remove socks, id = 2)
cart.removeItem(2);

console.log("\n--- After removing socks ---");
cart.displayCart();
