# Plant Shopping Cart Application

[🇪🇸 Versión en español](README_es.md)

Final project for the IBM **Developing Front-End Applications with React** course.

**Demo:** [Plant Shopping Application](https://raulpracticareact.github.io/plantShopping/)

## Overview

This project is a React e-commerce demo for **Paradise Nursery**, a plant store where users can browse house plants, add products to a shopping cart, and manage quantities before checkout.

The application starts with a landing page that introduces Paradise Nursery and includes a **Get Started** button. After entering the shop, users can view plant cards grouped by category, add items to the cart, see the cart counter update, and manage the selected products from the cart page.

## Screenshots

### Main Screen

`img/ePlant1.png` shows the landing page with the Paradise Nursery introduction and the Get Started button.

<p align="center">
  <img src="img/ePlant1.png" alt="Paradise Nursery landing page" width="600">
</p>

### Product Listing

`img/ePlant2.png` shows the plant catalog, including product cards, prices, descriptions, sale badges, Add to Cart buttons, and the cart quantity indicator.

<p align="center">
  <img src="img/ePlant2.png" alt="Paradise Nursery product listing" width="600">
</p>

### Shopping Cart

`img/ePlant3.png` shows the cart page, where users can review selected items, update quantities, remove products, continue shopping, or click the placeholder checkout button.

<p align="center">
  <img src="img/ePlant3.png" alt="Paradise Nursery shopping cart" width="600">
</p>

## Technologies Used

- **React:** Builds the user interface with reusable components.
- **Redux Toolkit:** Manages cart state across the application.
- **React Redux:** Connects React components to the Redux store.
- **Vite:** Provides the development server and build tooling.
- **CSS:** Handles the custom layout, product cards, buttons, navbar, and responsive styling.
- **GitHub Pages:** Used for deployment.

## Features

- **Landing Page:** Displays a greenhouse background, the Paradise Nursery brand message, an About Us section, and a Get Started button.
- **Product Listing Page:** Displays five plant categories, each with six plant cards containing an image, name, price, description, and sale badge.
- **Add to Cart Functionality:** Adds a plant to the Redux cart state and changes the selected product button to **Added to Cart**.
- **Cart Counter:** Shows the total quantity of items in the cart from the navbar.
- **Cart Management:** Allows users to increment, decrement, or delete cart items while totals update dynamically.
- **Continue Shopping:** Lets users return from the cart to the product listing page.
- **Checkout Placeholder:** The Checkout button currently displays an alert because the checkout flow is not implemented yet.

## Key Components

### `App.jsx`

Controls the transition from the landing page to the product listing page. It renders the Paradise Nursery intro, the About Us content, and the `ProductList` component once the user clicks Get Started.

### `ProductList.jsx`

Displays the plant catalog and navbar. It defines the plant data, renders the grouped product cards, handles Add to Cart actions, tracks whether the cart view is visible, and calculates the cart quantity shown in the navbar.

### `CartItem.jsx`

Displays the current cart contents. It calculates the total cart amount, lets users increase or decrease item quantities, deletes items, returns users to shopping, and shows a placeholder checkout alert.

### `CartSlice.jsx`

Defines the Redux cart slice with actions for adding items, removing items, and updating quantities.

## Current Product Categories

- Air Purifying Plants
- Aromatic Fragrant Plants
- Insect Repellent Plants
- Medicinal Plants
- Low Maintenance Plants

## Future Enhancements

- Implement a complete checkout process.
- Add more products and categories.
- Add user authentication.
- Integrate payment processing.
- Improve product identity handling for plants that appear in more than one category.

## Installation Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/RaulEstevezA/e-plantShopping.git
   ```

2. Navigate to the project directory:

   ```bash
   cd e-plantShopping
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:

   ```text
   http://localhost:5173
   ```

## Deployment

Build the project with:

```bash
npm run build
```

Deploy to GitHub Pages with:

```bash
npm run deploy
```

## License

This project is licensed under the MIT License.
