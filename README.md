# ShopSift - Client Side

ShopSift is a full-stack e-commerce platform designed to provide users with an intuitive and efficient shopping experience. This platform includes functionalities like pagination, searching, categorization, and sorting of products.

## Features

1. **Responsive Design**: Optimized for mobile, tablet, and desktop views.
2. **Pagination**: Navigate through products using pagination with Next and Previous buttons.
3. **Search Functionality**: Search for products by name with dynamic results.
4. **Categorization**: Filter products based on Brand Name, Category Name, and Price Range.
5. **Sorting**: Sort products by Price (Low to High, High to Low) and Date Added (Newest first).
6. **Firebase Authentication**: Login and registration using Google and Email/Password.

## Packages Used

- `react`
- `react-router-dom`
- `axios`
- `swiper`
- `react-helmet`
- `react-helmet-async`
- `react-hook-form`
- `react-icons`
- `react-scroll`
- `react-toastify`
- `react-tooltip`
- `@tanstack/react-query`
- `@tanstack/react-query-devtools`

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Oishee90/shopsift-wrbsite
    ```

2. Navigate to the project directory:
    ```bash
    cd shopsift
    ```

3. Install client-side dependencies:
    ```bash
    cd client
    npm install
    ```

4. Install server-side dependencies:
    ```bash
    cd ../server
    npm install
    ```

5. Set up environment variables:
    - Create a `.env` file in the root of the `client` and `server` directories.
    - Add your Firebase config keys and MongoDB credentials to the `.env` files.

6. Run the application:
    - Start the server:
        ```bash
        npm start
        ```
    - Start the client:
        ```bash
        cd ../client
        npm start
        ```



## Live Demo

Check out the live demo of ShopSift [here](https://shopsift-website.web.app).