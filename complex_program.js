// filename: complex_program.js
// This code is a complex program that simulates an online shopping experience

// Inventory of products
const products = [
  { id: 1, name: "iPhone 12 Pro", price: 999.99, stock: 5 },
  { id: 2, name: "Samsung Galaxy S21 Ultra", price: 1199.99, stock: 3 },
  { id: 3, name: "Google Pixel 6 Pro", price: 899.99, stock: 7 },
  // ... add more products
];

// User information
let user = {
  name: "John Doe",
  email: "john.doe@example.com",
  address: "123 Main St.",
  // ... other user details
};

// Shopping cart
let cart = [];

// Function to display available products
function displayProducts() {
  console.log("Available products:");
  for (const product of products) {
    console.log(`${product.id}. ${product.name} - $${product.price}`);
  }
}

// Function to add a product to the cart
function addToCart(productId, quantity) {
  const product = products.find((p) => p.id === productId);
  if (product && product.stock >= quantity) {
    const cartItem = cart.find((item) => item.product.id === productId);
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cart.push({ product, quantity });
    }
    product.stock -= quantity;
    console.log(`${quantity} ${product.name}(s) added to cart.`);
  } else {
    console.log("Product not available or insufficient stock.");
  }
}

// Function to remove a product from the cart
function removeFromCart(productId, quantity) {
  const cartItem = cart.find((item) => item.product.id === productId);
  if (cartItem) {
    if (cartItem.quantity > quantity) {
      cartItem.quantity -= quantity;
      product.stock += quantity;
      console.log(`${quantity} ${product.name}(s) removed from cart.`);
    } else {
      cart = cart.filter((item) => item.product.id !== productId);
      product.stock += cartItem.quantity;
      console.log(`${cartItem.quantity} ${product.name}(s) removed from cart.`);
    }
  } else {
    console.log("Product not found in cart.");
  }
}

// Function to calculate the total price of the cart
function calculateTotalPrice() {
  let total = 0;
  for (const item of cart) {
    total += item.product.price = item.quantity;
  }
  return total;
}

// Main program flow
console.log(`Welcome, ${user.name}!`);
console.log("Select a product to add to cart:");
displayProducts();
addToCart(1, 2);
addToCart(2, 1);
removeFromCart(1, 1);
console.log(`Total price: $${calculateTotalPrice()}`);

// ... add more functionality and features to enhance the complex program