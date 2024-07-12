Develop a restaurant page, ensuring it is user-friendly and visually appealing.

#### Mobile Interface

<a href="https://res.cloudinary.com/dupvp9gj9/image/upload/v1688464567/Restaurant_page_movie-view_dqv1fl.png" target=_blank_>
    <div style="text-align: center;">
        <img src="https://res.cloudinary.com/dupvp9gj9/image/upload/v1688465518/Restaurant_page_movie-view_2_p6r4up.png" alt="restaurant-app" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
    </div>
</a>

<br/>
#### Web Interface
<a href="https://res.cloudinary.com/dupvp9gj9/image/upload/v1688464566/Restaurant_page_web-view_l7snar.png" target=_blank_ >
    <div style="text-align: center;">
        <img src="https://res.cloudinary.com/dupvp9gj9/image/upload/v1688464566/Restaurant_page_web-view_l7snar.png" alt="restaurant-app" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
    </div>
</a>

#### API:

<a href="https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details" target=_blank_ >https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details</a>

#### Instructions:

- The API returns the dish categories and the dishes in that category.
- The dish categories should be slidable.
- If a dish has addons(`addoncat`), then it should display the text **“Customizations available”**.
- Clicking on the `+` and `-` buttons should update the count accordingly and also on the cart icon on the top bar.
- Implement maintainable and reusable coding standards.
- The tabs must not be hardcoded, their length should change as per API.
- Host the site in Heroku / Netlify/ any hosting.
- Submit the git URL & site URL in the Submission form.



### Enhancement Functionality

<details>
<summary>Functionality to be added</summary>

- Keep the existing code in **Home Route** and add a **Login Route** and a **Cart Route** to the application.
- **Login Route Functionality**
  - When a valid username and password are provided and the Login button is clicked, navigate the user to the Home route. Else, display the error message. Use `js-cookie` to maintain Cookies for authentication.
  - If an authenticated user attempts to access either the **Home Route** or **Cart Route**, they should be redirected to the corresponding route. Else, should be redirected to the **Login Route**.
- **Home Route Functionality**

  - When the Cart icon button in the header is clicked, then the page should be navigated to the **Cart** route.
  - When the restaurant name in the header is clicked, then the page should be navigated to the **Home** route.
  - Add a `Logout` button in the header of the **Home Route** and add corresponding functionality.
  - Add a feature to add items to the cart with a click of a button. The `ADD TO CART` button should be displayed only if the dish items are available and the dish quantity is greater than **0**.
    - When the `ADD TO CART` button of a particular dish item is clicked, that dish item should be added to the **Cart Route** and the count should be increased by one at the cart icon.
    - When the user clicks the `ADD TO CART` button multiple times, the count should not increase at the cart icon as it is the same item and count in the **Cart Route** should be increased for that particular dish.

- **Cart Route Functionality**

  - The `Cart` Route should have a header similar to the Home Route.
  - Add a `Remove All` button in the `Cart Route`. Implement this by adding a button.
    - When a user clicks on the **Remove All** button, all the cart items should be removed from the cart and an <a href="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png" target="_blank_">Empty Cart Image</a> should be displayed.
  - Each cart item on the cart page should include the dish name, dish image, dish price, plus (`+`) button, minus (`-`) button, quantity of the dish item, and a remove button.
  - In each cart item in the cart
    - When the plus button is clicked, then the quantity of the dish should be increased and when minus button is clicked, then the quantity of the dish should be decreased.
    - When the quantity of a dish reaches zero, the dish item should be removed from the cart.
    - Based on the quantity of the dish, the dish price should be updated accordingly.
    - When a user clicks on the remove button, the cart item should be removed from the cart list.

- You need to use **React Context** to maintain that sync between the **Home Route** and **Cart Route**. Use the context as given below for the test cases to pass.

  - The `CartContext` has an object with the following properties
    - `cartList`- this key stores the cart items
    - `removeAllCartItems`- this method is used to remove all the cart items in the cartList
    - `addCartItem`- this method adds the cart item to the cartList
    - `removeCartItem`- this method removes the cart item from the cartList
    - `incrementCartItemQuantity`- this method increases the quantity of a dish in the cartList
    - `decrementCartItemQuantity`- this method decreases the quantity of a dish in the cartList

- Make sure your application maintains a good CSS styling.

<MultiLineNote>
Generally, in the interviews, the interviewer will not specify you to use context to solve the question. You need to decide based on the use case.
</MultiLineNote>

</details>

### API Details

<details>
<summary>Login API</summary>
<br/>
**Use this API for authentication**

- https://apis.ccbp.in/login

Request:

```json
{
  "username": "rahul",
  "password": "rahul@2021"
}
```

Success Response:

```json
{
  "jwt_token": "token_string"
}
```

Failure Response:

```json
{
  "status_code": 404,
  "error_msg": "Username is not found"
}
```

</details>


#### Submission Form:

<center>Click the below button and submit your git URL and site URL</center>
<br>
<a target=_blank_ href="https://forms.gle/NNpW1HBk7aDDaKuw6">
  <center><button style="color: #fff; border: none; cursor: pointer; width: 218px; height: 34px; background-color: rgb(22, 101, 216); border-radius: 5.4px; box-shadow: rgb(0 0 0 / 36%) 0px 2px 4px 0px;font-family: Inter;font-size: 14px;color: rgb(255, 255, 255);font-weight: 500;letter-spacing: 0.5px;text-transform: uppercase;">
    SUBMIT
  </button>
  </center>
<