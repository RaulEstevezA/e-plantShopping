# Plant Shopping Cart Application

## Final Project for the "Developing Front-End Applications with React" Course by IBM.

**Demo:** [Plant Shopping Application](https://raulpracticareact.github.io/plantShopping/)

## Technologies Used
- **React:** For building user interfaces and managing components.
- **Redux:** For state management, specifically handling the cart items.
- **Vite:** As the development environment and build tool for faster and lightweight builds.
- **GitHub Pages:** For deployment and hosting the project online.
- **CSS:** Custom styling and layout of components, including interactive buttons and page structures.

## Overview
This project is a simple e-commerce application that allows users to browse a list of house plants, add them to a shopping cart, and manage their selections through a cart interface. The project covers essential features of a shopping cart, such as incrementing, decrementing quantities, and dynamically updating the total price.

## Features
- **Landing Page:** Contains a background image, a company description, and a Get Started button.
- **Product Listing Page:** Displays six categories of house plants, each containing detailed information including a thumbnail, name, price, and description.
- **Add to Cart Functionality:** Each product has an "Add to Cart" button that updates the cart state using Redux and disables the button once clicked.
- **Cart Management:** Users can increase, decrease, or delete items from the cart while dynamically updating quantities and totals.

## Key Components

### 1. **ProductList.jsx**
This component displays the list of products categorized into different plant types.
- **State Management:** Uses `useState` to manage local visibility and `useSelector` to fetch cart items from the Redux store.
- **Key Functions:**
  - `handleAddToCart(product)`: Adds a product to the cart.
  - `calculateTotalQuantity()`: Computes the total number of items in the cart.
  - Button states: Updates button text and disables it when a product is already in the cart.

### 2. **CartItem.jsx**
Displays items currently in the cart and allows users to modify or remove them.
- **Key Functions:**
  - `handleIncrement(item)`: Increases the quantity of the selected product.
  - `handleDecrement(item)`: Decreases the quantity of the selected product and removes it if the quantity reaches zero.
  - `calculateTotalAmount()`: Calculates the overall price of items in the cart.
  - `handleContinueShopping(e)`: Returns to the product listing page.
  - `handleCheckoutShopping()`: Displays an alert indicating that the checkout feature is a placeholder.

### 3. **CartSlice.js**
Defines the Redux logic to handle cart-related actions.
- **Reducers:**
  - `addItem()`: Adds a product to the cart.
  - `removeItem()`: Removes a product from the cart.
  - `updateQuantity()`: Updates the quantity of a product.

## Challenges and Solutions
- **Dynamic Button States:** Implementing the logic to disable the "Add to Cart" button and change its label to "Added to Cart" was a crucial aspect. This was achieved by tracking cart items using `useSelector` and `some()` to check if an item is in the cart.
- **Managing Quantities:** Ensuring that quantities update dynamically and correctly required careful state management, using Redux actions to ensure consistency.
- **Deployment:** Configuring the project correctly for GitHub Pages using Vite and ensuring proper asset references was a key deployment challenge.

## Future Enhancements
- Implement a fully functional checkout process.
- Add more categories and products.
- Integrate user authentication and payment processing.

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yourrepository.git
   ```
2. Navigate to the project directory:
   ```bash
   cd plantShopping
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:5173`.

## License
This project is licensed under the MIT License.

---
Thank you for checking out the Plant Shopping Cart Application! If you have any feedback or issues, feel free to contribute or submit an issue on the [GitHub repository](https://github.com/yourusername/yourrepository).
