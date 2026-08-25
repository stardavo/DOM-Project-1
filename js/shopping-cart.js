// ShoppingCart class : contains an array of CartItem instances
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Get the total price of all items inside the cart
  getTotal() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  // Add a product to the cart : if it already exists, increase its quantity
  addItem(product, quantity = 1) {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new CartItem(product, quantity));
    }
  }

  // Remove a product from the cart by its id
  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  // Display the cart items in the console
  displayCart() {
    this.items.forEach((item) => {
      console.log(
        `${item.product.name} - ${item.quantity} x ${item.product.price} $ = ${item.getTotalPrice()} $`
      );
    });
    console.log(`Total : ${this.getTotal()} $`);
  }
}
