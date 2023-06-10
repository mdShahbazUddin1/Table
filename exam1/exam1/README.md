## React Groceries List

### Submission Instructions [Please note]

#### Maximum Marks - 15

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work.
- Do not push node_modules and package_lock.json to github.

```
✅ able to submit the app - 1 mark ( minimum score )
✅ heading should be visible when component loads - 1 mark
✅ should make a get request to endpoint - 2 marks
✅ Check all products are visible - 1 mark.
✅ Check all name of the product are displayed - 1 mark
✅ Check all price of the product are displayed - 1 mark
✅ Check all image of the product are displayed - 1 mark
✅ Add to Cart button should be visible by default - 1 mark.
✅ onclicking Add to Cart button quantity should be incremented by 1 and CartButtons should be rendered(+ and - button) - 2 marks.
✅ increment and decrement quantity buttons should work" - 2 marks.
✅ if quantity goes below 1 Add to Cart button should be visible and decrement and increment buttons should not be visible - 2 marks

```

### Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json

```
npm install --engine-strict

// run locally
npm run start
```

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
  try to keep one submission at a time

## Problem

### Description

Create a react application which resembles the following image

- You have to build a Products display page and each product can have an increment and decrement buttons to change the quantity.

- Initially render `Get Groceries` button

  <img width="1719" alt="Screenshot 2022-11-25 at 12 05 27 PM" src="https://user-images.githubusercontent.com/103956933/222460282-bdbf7fa8-c3cc-46fc-92a3-3ef533114d80.png">

- create a button with className `get-groceries`
- onclicking `Get Groceries` button fetch data from below given API

  `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries`

- if button is clicked then data is visible and `button should not be visible`
- map data into `GroceryItem` component inside `Grocerydetails` component

  <img width="1719" alt="Screenshot 2022-11-25 at 12 05 27 PM" src="https://user-images.githubusercontent.com/103956933/222422801-ef504edf-f50c-4ced-b585-44a5406a1950.jpg">

## Folder Structure

- Components
  - CartButton.jsx
  - Grocerydetails.jsx
  - GroceryItem.jsx
- App.js

- ### GroceryDetails

  - `h1` tag with `Groceries` as title
  - a `Get-Groceries` button with `className="get-groceries"`
  - button is only visible if product are not shown and vice versa
  - on clicking button fetch data from api and map into below container
  - a `div` tag with `data-cy=container` ( data-cy is similar to id / classname which we give to any of the tags)
  - the above container should contain all the product details displayed as cards

- ### GroceryItem

  - This components should accept each product details (image, name, price) as props
  - a `div` tag with `classname = grocery_card`
  - The above div should contain all the properties of given product (image, name, price,)
  - show image in `img` tag
  - show name in `h3` and price in `h5` tags
  - Each card should have `Add to Cart` button with `data-cy=add_to_cart` by default

- ### CartButton
  - a `div` tag with `className = change_quantity_container`
  - the above `div` should have
    - increment button (with textcontent as `+`) with `data-cy = inc_btn`
    - decrement button (with textcontent as `-`) with `data-cy = dec_btn`
    - a `p` tag with `className=quantity` to display the quantity

### Features to implement

- By default all the product cards should have `Add to Cart` button
- use useState to maintain count of cart and initially it should be 0
- onClicking `Add to Cart` button conditionally render the `CartButton` component with quantity as `1`

<img width="1719" alt="Screenshot 2022-11-25 at 12 05 27 PM" src="https://user-images.githubusercontent.com/103956933/222462554-fa9a3d62-e49c-40f4-9c08-23f44cfb804c.jpg">

- You can increment or decrement the quantity by clicking `+`, `-` buttons
- If the quantity goes below 1 bring the `Add to Cart` back and `CartButton` component should not be visible.
- refer this for better understanding https://www.jiomart.com/all-topdeals

#### **Note**

- Make sure you use only the given components and dont create new Components, files, folders of your own. Changing component name, file/folder structures might result in giving you zero marks
- Do Not Remove `data-cy="xxxx"` from anywhere, these are used by testing tools to test your code, removal of this will lead to low score.
- Also make sure to cross check all the spellings and Case of Texts.

### General Guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
