// CartItem class : stores a product and its quantity in the shopping cart
class CartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  // Calculate the total price of this item (unit price × quantity)
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}
